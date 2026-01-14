import { NextResponse } from "next/server";

interface TechUpdate {
  date: string;
  title: string;
  summary: string;
  category: string;
  url?: string;
}

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    // Fetch from NewsAPI (you'll need to add your API key to .env)
    const apiKey = process.env.NEWS_API_KEY;
    // Search for IT-related keywords
    const itKeywords = ['IT', 'information technology', 'software', 'programming', 'development', 'enterprise', 'infrastructure', 'system', 'network', 'database', 'cloud', 'cybersecurity', 'devops'];
    const query = itKeywords.join(' OR ');
    const newsApiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&pageSize=10${apiKey ? `&apiKey=${apiKey}` : ''}`;

    let updates: TechUpdate[] = [];

    if (apiKey) {
      try {
        const response = await fetch(newsApiUrl, {
          cache: 'no-store', // Don't cache the API call itself
        });

        if (response.ok) {
          const data = await response.json();
          updates = data.articles
            ?.filter((article: any) => isITRelated(article.title || '', article.description || ''))
            .slice(0, 10)
            .map((article: any) => ({
              date: new Date(article.publishedAt).toISOString().split('T')[0],
              title: article.title || 'IT Update',
              summary: article.description || article.title || 'Latest IT news and updates.',
              category: getCategoryFromTitle(article.title || ''),
              url: article.url,
            })) || [];
        }
      } catch (error) {
        console.error('NewsAPI error:', error);
      }
    }

    // Fallback: Fetch from Hacker News API if NewsAPI fails or no key
    if (updates.length === 0) {
      try {
        const hnResponse = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json', {
          cache: 'no-store',
        });
        
        if (hnResponse.ok) {
          const storyIds = await hnResponse.json();
          const topStoryIds = storyIds.slice(0, 30); // Get more to filter for IT-related
          
          const storyPromises = topStoryIds.map((id: number) =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, {
              cache: 'no-store',
            }).then(res => res.json())
          );

          const stories = await Promise.all(storyPromises);
          
          updates = stories
            .filter((story: any) => story && story.title && isITRelated(story.title, story.title))
            .slice(0, 10)
            .map((story: any) => ({
              date: new Date(story.time * 1000).toISOString().split('T')[0],
              title: story.title,
              summary: story.title || 'Latest IT news from Hacker News.',
              category: getCategoryFromTitle(story.title || ''),
              url: story.url,
            }));
        }
      } catch (error) {
        console.error('Hacker News API error:', error);
      }
    }

    // Final fallback: Return sample data if all APIs fail
    if (updates.length === 0) {
      updates = getFallbackUpdates();
    }

    return NextResponse.json({ updates }, { 
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Tech updates API error:', error);
    return NextResponse.json(
      { updates: getFallbackUpdates() },
      { status: 200 } // Return fallback data even on error
    );
  }
}

function isITRelated(title: string, description: string): boolean {
  const text = (title + ' ' + description).toLowerCase();
  const itKeywords = [
    'it', 'information technology', 'software', 'programming', 'development', 
    'enterprise', 'infrastructure', 'system', 'network', 'database', 'server',
    'cloud', 'cybersecurity', 'devops', 'api', 'framework', 'architecture',
    'deployment', 'container', 'kubernetes', 'docker', 'microservices',
    'backend', 'frontend', 'full stack', 'coding', 'algorithm', 'data structure',
    'agile', 'scrum', 'ci/cd', 'version control', 'git', 'repository',
    'code', 'application', 'platform', 'service', 'solution', 'integration',
    'automation', 'scripting', 'debugging', 'testing', 'qa', 'quality assurance'
  ];
  
  return itKeywords.some(keyword => text.includes(keyword));
}

function getCategoryFromTitle(title: string): string {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('ai') || titleLower.includes('artificial intelligence') || titleLower.includes('machine learning')) {
    return 'AI/ML';
  }
  if (titleLower.includes('cloud') || titleLower.includes('aws') || titleLower.includes('azure') || titleLower.includes('gcp')) {
    return 'Cloud Computing';
  }
  if (titleLower.includes('security') || titleLower.includes('cyber') || titleLower.includes('vulnerability')) {
    return 'Cybersecurity';
  }
  if (titleLower.includes('devops') || titleLower.includes('ci/cd') || titleLower.includes('deployment')) {
    return 'DevOps';
  }
  if (titleLower.includes('database') || titleLower.includes('sql') || titleLower.includes('nosql')) {
    return 'Database';
  }
  if (titleLower.includes('network') || titleLower.includes('infrastructure') || titleLower.includes('server')) {
    return 'Infrastructure';
  }
  if (titleLower.includes('web') || titleLower.includes('javascript') || titleLower.includes('react') || titleLower.includes('node')) {
    return 'Web Development';
  }
  if (titleLower.includes('mobile') || titleLower.includes('ios') || titleLower.includes('android')) {
    return 'Mobile Development';
  }
  if (titleLower.includes('enterprise') || titleLower.includes('business') || titleLower.includes('solution')) {
    return 'Enterprise IT';
  }
  if (titleLower.includes('api') || titleLower.includes('microservice') || titleLower.includes('architecture')) {
    return 'Software Architecture';
  }
  
  return 'IT';
}

function getFallbackUpdates(): TechUpdate[] {
  const today = new Date();
  return [
    {
      date: today.toISOString().split('T')[0],
      title: "Enterprise IT Infrastructure: Modernization Strategies for 2025",
      summary: "Organizations are adopting cloud-native architectures and microservices to improve scalability, reduce costs, and enhance system reliability.",
      category: "Enterprise IT",
    },
    {
      date: new Date(today.getTime() - 86400000).toISOString().split('T')[0],
      title: "DevOps Best Practices: Accelerating Software Delivery",
      summary: "CI/CD pipelines and containerization technologies are revolutionizing how IT teams deploy and manage applications in production environments.",
      category: "DevOps",
    },
    {
      date: new Date(today.getTime() - 172800000).toISOString().split('T')[0],
      title: "Cybersecurity in IT: Protecting Enterprise Systems",
      summary: "Zero-trust security models and advanced threat detection systems are becoming essential for protecting IT infrastructure from cyber attacks.",
      category: "Cybersecurity",
    },
    {
      date: new Date(today.getTime() - 259200000).toISOString().split('T')[0],
      title: "Database Management: Optimizing Performance and Scalability",
      summary: "Modern database solutions are addressing the challenges of handling large-scale data while maintaining high performance and availability.",
      category: "Database",
    },
    {
      date: new Date(today.getTime() - 345600000).toISOString().split('T')[0],
      title: "API Development: Building Robust Integration Solutions",
      summary: "RESTful and GraphQL APIs are enabling seamless integration between different IT systems and services, improving interoperability.",
      category: "Software Architecture",
    },
  ];
}

