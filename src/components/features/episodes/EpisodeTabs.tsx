'use client';

import { useState } from 'react';

interface Episode {
  id: number;
  title: string;
}

interface EpisodeTabsProps {
  episode: Episode;
}

export default function EpisodeTabs({ episode }: EpisodeTabsProps) {
  const [activeTab, setActiveTab] = useState('show-notes');

  const tabs = [
    { id: 'show-notes', label: 'Show Notes' },
    { id: 'transcript', label: 'Transcript' },
    { id: 'resources', label: 'Resources' },
    { id: 'related', label: 'Related' },
  ];

  const timestamps = [
    { time: '00:00', label: 'Intro' },
    { time: '02:15', label: 'Topic introduction' },
    { time: '15:30', label: 'Guest interview begins' },
    { time: '35:45', label: 'Audience Q&A' },
    { time: '43:00', label: 'Wrap up' },
  ];

  const resources = [
    { title: 'Article: The State of Dating in 2025', url: '#' },
    { title: 'Study: Social Media Impact on Relationships', url: '#' },
    { title: 'Guest\'s Website', url: '#' },
  ];

  const sponsors = [
    { name: 'Sponsor Name', url: '#' },
  ];

  return (
    <div className="mb-8">
      {/* Tab Navigation */}
      <div className="border-b border-zinc-700 mb-6">
        <nav className="flex space-x-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-spicy-orange text-spicy-orange'
                  : 'border-transparent text-text-muted hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="text-text-body">
        {activeTab === 'show-notes' && (
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
                📝 Show Notes
              </h3>
              <p className="mb-6 leading-relaxed">
                In this episode, we dive deep into the controversial topic that's been on everyone's mind. 
                Mtho and Sino bring their unfiltered takes on what's happening in the streets, covering 
                everything from modern dating culture to the impact of social media on relationships.
              </p>
              <p className="leading-relaxed">
                This conversation gets real fast - we're talking about the things nobody wants to say 
                out loud but everyone's thinking. No scripts, no PR, just raw truth.
              </p>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold uppercase text-white mb-4">
                Timestamps:
              </h4>
              <ul className="space-y-2">
                {timestamps.map((timestamp, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <button className="text-spicy-orange hover:text-spicy-orange-light font-mono text-sm">
                      {timestamp.time}
                    </button>
                    <span>{timestamp.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold uppercase text-white mb-4">
                Mentioned in this episode:
              </h4>
              <ul className="space-y-2">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.url} 
                      className="text-spicy-orange hover:text-spicy-orange-light underline"
                    >
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg font-bold uppercase text-white mb-4">
                Sponsors:
              </h4>
              <ul className="space-y-2">
                {sponsors.map((sponsor, index) => (
                  <li key={index}>
                    <a 
                      href={sponsor.url} 
                      className="text-spicy-orange hover:text-spicy-orange-light underline"
                    >
                      {sponsor.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'transcript' && (
          <div>
            <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
              📄 Transcript
            </h3>
            <p className="text-text-muted mb-4">
              Full transcript coming soon. We're working on getting this episode transcribed.
            </p>
            <div className="bg-card-darker p-4 rounded-lg">
              <p className="text-sm text-text-muted">
                Transcripts are automatically generated and may contain errors. 
                We're working to improve accuracy.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div>
            <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
              🔗 Resources
            </h3>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div key={index} className="p-4 bg-card-darker rounded-lg">
                  <a 
                    href={resource.url}
                    className="text-spicy-orange hover:text-spicy-orange-light font-semibold"
                  >
                    {resource.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'related' && (
          <div>
            <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
              💬 Related Discussions
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-card-darker rounded-lg">
                <h4 className="text-white font-semibold mb-2">
                  "What did you think about the debate?"
                </h4>
                <p className="text-text-muted text-sm">89 replies</p>
              </div>
              <div className="p-4 bg-card-darker rounded-lg">
                <h4 className="text-white font-semibold mb-2">
                  "Guest follow-up questions"
                </h4>
                <p className="text-text-muted text-sm">23 replies</p>
              </div>
            </div>
            <button className="mt-4 text-spicy-orange hover:text-spicy-orange-light">
              View All Discussions →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}