import { useEffect, useState } from "react";
import { Github, Users, BookOpen, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface GitHubData {
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string;
}

const GITHUB_USERNAME = "sagar65s"; // placeholder — update later

const GitHubStats = () => {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((r) => r.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const stats = data
    ? [
        { icon: BookOpen, label: "Repositories", value: data.public_repos },
        { icon: Users, label: "Followers", value: data.followers },
        { icon: Star, label: "Following", value: data.following },
      ]
    : [];

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-gradient">GitHub</span> Stats
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </ScrollReveal>

        {loading ? (
          <div className="flex justify-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : data ? (
          <div className="flex flex-col items-center">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={data.avatar_url}
                  alt={data.name || GITHUB_USERNAME}
                  className="w-16 h-16 rounded-full border-2 border-primary"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-semibold text-lg">{data.name || GITHUB_USERNAME}</h3>
                  {data.bio && (
                    <p className="text-sm text-muted-foreground">{data.bio}</p>
                  )}
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-3 gap-4 md:gap-8 w-full max-w-lg">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <ScrollReveal key={s.label} delay={i * 0.1}>
                    <div className="glass-card p-4 md:p-6 text-center hover-glow hover:scale-105 transition-all">
                      <Icon className="text-primary mx-auto mb-2" size={24} />
                      <p className="text-2xl font-bold">{s.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal delay={0.3}>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-glow hover:scale-105 transition-all"
              >
                <Github size={18} />
                View GitHub Profile
              </a>
            </ScrollReveal>
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Unable to load GitHub stats.</p>
        )}
      </div>
    </section>
  );
};

export default GitHubStats;
