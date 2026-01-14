"use client";

import { useState, useEffect } from "react";
import { Column, Flex, Heading, Tag, Text, Spinner } from "@/once-ui/components";
import { gallery } from "@/app/resources/content";
import { formatDate } from "@/app/utils/formatDate";
import styles from "./Gallery.module.scss";

interface TechUpdate {
  date: string;
  title: string;
  summary: string;
  category: string;
  url?: string;
}

export default function TechUpdates() {
  const [updates, setUpdates] = useState<TechUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTechUpdates = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/tech-updates");
        
        if (!response.ok) {
          throw new Error("Failed to fetch tech updates");
        }
        
        const data = await response.json();
        setUpdates(data.updates || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching tech updates:", err);
        setError("Failed to load tech updates. Please try again later.");
        // Use fallback data from content.js if API fails
        if (gallery.updates) {
          setUpdates(gallery.updates);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTechUpdates();
  }, []);

  return (
    <Column fillWidth maxWidth="m" paddingX="l" gap="l" paddingY="l">
      <Heading variant="display-strong-s" marginBottom="m">
        {gallery.title}
      </Heading>
      <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="xl">
        {gallery.description}
      </Text>

      {loading && (
        <Flex fillWidth horizontal="center" paddingY="xl">
          <Spinner size="l" />
        </Flex>
      )}

      {error && !loading && (
        <Flex fillWidth padding="l" radius="m" border="neutral-medium" style={{ backgroundColor: "var(--color-neutral-weak)" }}>
          <Text variant="body-default-m" onBackground="neutral-medium">
            {error}
          </Text>
        </Flex>
      )}

      {!loading && !error && updates.length > 0 && (
        <Column fillWidth gap="l">
          {updates.map((update, index) => (
            <Flex
              key={index}
              fillWidth
              direction="column"
              padding="l"
              radius="m"
              border="neutral-medium"
              gap="m"
              style={{ backgroundColor: "var(--color-neutral-weak)" }}
            >
              <Flex fillWidth horizontal="space-between" vertical="center" wrap>
                <Tag variant="secondary" size="s">
                  {update.category}
                </Tag>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {formatDate(update.date)}
                </Text>
              </Flex>
              <Heading as="h3" variant="heading-strong-l">
                {update.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">
                {update.summary}
              </Text>
              {update.url && (
                <Text variant="body-default-s">
                  <a 
                    href={update.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: "var(--color-brand-strong)", textDecoration: "none" }}
                  >
                    Read more →
                  </a>
                </Text>
              )}
            </Flex>
          ))}
        </Column>
      )}

      {!loading && !error && updates.length === 0 && (
        <Flex fillWidth padding="l" radius="m" border="neutral-medium" style={{ backgroundColor: "var(--color-neutral-weak)" }}>
          <Text variant="body-default-m" onBackground="neutral-medium">
            No tech updates available at the moment. Please check back later.
          </Text>
        </Flex>
      )}
    </Column>
  );
}

