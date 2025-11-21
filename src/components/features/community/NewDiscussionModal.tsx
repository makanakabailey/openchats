'use client';

import { useState } from 'react';
import { X, Image as ImageIcon, Paperclip } from '@phosphor-icons/react';

interface NewDiscussionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewDiscussionModal({ isOpen, onClose }: NewDiscussionModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('general');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState('');
  const [episodeSearch, setEpisodeSearch] = useState('');

  if (!isOpen) return null;

  const categories = [
    { id: 'episode-talk', name: 'Episode Talk', icon: '🎙️', description: 'Discuss specific episodes' },
    { id: 'operator-art', name: 'Operator Art', icon: '🎨', description: 'Share your creative work' },
    { id: 'ideas', name: 'Ideas', icon: '💡', description: 'Suggest improvements' },
    { id: 'submit-topics', name: 'Submit Topics', icon: '📝', description: 'Suggest episode topics' },
    { id: 'general', name: 'General', icon: '🗣️', description: 'General discussions' },
  ];

  // Mock episodes data - would come from API
  const episodes = [
    { id: '1', number: 156, title: 'The Truth About Social Media Addiction', date: '2024-03-15' },
    { id: '2', number: 155, title: 'Money, Power & Politics in SA', date: '2024-03-08' },
    { id: '3', number: 154, title: 'Dating in 2024: A Disaster?', date: '2024-03-01' },
    { id: '4', number: 153, title: 'The Rise of AI: Should We Be Scared?', date: '2024-02-23' },
    { id: '5', number: 152, title: 'Mental Health & Masculinity', date: '2024-02-16' },
  ];

  const filteredEpisodes = episodes.filter(ep => 
    ep.title.toLowerCase().includes(episodeSearch.toLowerCase()) ||
    ep.number.toString().includes(episodeSearch)
  );

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles(prev => [...prev, ...files]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert('Please fill in title and content');
      return;
    }

    if (category === 'episode-talk' && !selectedEpisode) {
      alert('Please select an episode for Episode Talk');
      return;
    }

    if (category === 'operator-art' && selectedFiles.length === 0) {
      alert('Please upload your artwork for Operator Art');
      return;
    }

    console.log('Creating discussion:', {
      title,
      content,
      category,
      episodeId: selectedEpisode,
      files: selectedFiles,
    });

    // Reset form
    setTitle('');
    setContent('');
    setCategory('general');
    setSelectedFiles([]);
    setSelectedEpisode('');
    setEpisodeSearch('');
    onClose();
    
    alert('Discussion created! (This would save to database in production)');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-card-dark rounded-lg border border-zinc-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-700 sticky top-0 bg-card-dark">
          <h2 className="font-display text-2xl font-black uppercase text-white">
            Start New Discussion
          </h2>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-white transition-colors"
          >
            <X size={24} weight="bold" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          {/* Category Selection */}
          <div>
            <label className="block font-semibold text-white mb-3">
              Category *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setCategory(cat.id);
                    if (cat.id !== 'episode-talk') setSelectedEpisode('');
                  }}
                  className={`flex items-start gap-3 p-4 rounded-lg border-2 transition-colors text-left ${
                    category === cat.id
                      ? 'border-spicy-orange bg-spicy-orange/10'
                      : 'border-zinc-700 hover:border-zinc-600'
                  }`}
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <div className="font-semibold text-white">{cat.name}</div>
                    <div className="text-sm text-text-muted">{cat.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Episode Selection (only for Episode Talk) */}
          {category === 'episode-talk' && (
            <div>
              <label className="block font-semibold text-white mb-2">
                Select Episode *
              </label>
              <input
                type="text"
                value={episodeSearch}
                onChange={(e) => setEpisodeSearch(e.target.value)}
                placeholder="Search episodes by number or title..."
                className="w-full px-4 py-3 bg-studio-black border border-zinc-700 rounded-lg text-white placeholder:text-text-muted focus:border-spicy-orange focus:outline-none mb-3"
              />
              <div className="max-h-48 overflow-y-auto space-y-2 bg-studio-black rounded-lg border border-zinc-700 p-2">
                {filteredEpisodes.map(episode => (
                  <button
                    key={episode.id}
                    onClick={() => setSelectedEpisode(episode.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedEpisode === episode.id
                        ? 'bg-spicy-orange/20 border-2 border-spicy-orange'
                        : 'bg-zinc-800 hover:bg-zinc-700 border border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-spicy-orange font-bold">EP {episode.number}</span>
                        <span className="text-white ml-2">{episode.title}</span>
                      </div>
                      <span className="text-text-muted text-sm">{episode.date}</span>
                    </div>
                  </button>
                ))}
                {filteredEpisodes.length === 0 && (
                  <p className="text-text-muted text-center py-4">No episodes found</p>
                )}
              </div>
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block font-semibold text-white mb-2">
              Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What's your discussion about?"
              maxLength={200}
              className="w-full px-4 py-3 bg-studio-black border border-zinc-700 rounded-lg text-white placeholder:text-text-muted focus:border-spicy-orange focus:outline-none"
            />
            <p className="text-text-muted text-sm mt-1">
              {title.length} / 200 characters
            </p>
          </div>

          {/* Content */}
          <div>
            <label className="block font-semibold text-white mb-2">
              Content *
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your thoughts... (be unfiltered)"
              rows={8}
              maxLength={5000}
              className="w-full px-4 py-3 bg-studio-black border border-zinc-700 rounded-lg text-white placeholder:text-text-muted focus:border-spicy-orange focus:outline-none resize-none"
            />
            <p className="text-text-muted text-sm mt-1">
              {content.length} / 5000 characters
            </p>
          </div>

          {/* File Upload */}
          <div>
            <label className="block font-semibold text-white mb-2">
              Attachments {category === 'fan-art' && '(Required for Fan Art)'}
            </label>
            <div className="space-y-3">
              <div className="flex gap-3">
                <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-white cursor-pointer transition-colors">
                  <ImageIcon size={20} weight="bold" />
                  <span>Upload Images</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </label>
                <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-white cursor-pointer transition-colors">
                  <Paperclip size={20} weight="bold" />
                  <span>Upload Files</span>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Selected Files */}
              {selectedFiles.length > 0 && (
                <div className="space-y-2">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        {file.type.startsWith('image/') ? (
                          <ImageIcon size={20} className="text-spicy-orange" />
                        ) : (
                          <Paperclip size={20} className="text-spicy-orange" />
                        )}
                        <div>
                          <p className="text-white text-sm font-medium">{file.name}</p>
                          <p className="text-text-muted text-xs">
                            {(file.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile(index)}
                        className="text-text-muted hover:text-red-400 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-text-muted text-xs">
                Supported: Images (JPG, PNG, GIF), Files (PDF, TXT). Max 10MB per file.
              </p>
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
            <h4 className="font-semibold text-white mb-2">Community Guidelines</h4>
            <ul className="text-text-muted text-sm space-y-1">
              <li>• Be respectful and unfiltered</li>
              <li>• No spam or self-promotion</li>
              <li>• Stay on topic for your chosen category</li>
              <li>• For Operator Art: Include your artwork as an attachment</li>
              <li>• For Episode Talk: Select the episode you're discussing</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-zinc-700 bg-card-darker">
          <button
            onClick={onClose}
            className="px-6 py-3 text-text-muted hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={
              !title.trim() || 
              !content.trim() || 
              (category === 'episode-talk' && !selectedEpisode) ||
              (category === 'operator-art' && selectedFiles.length === 0)
            }
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            POST DISCUSSION
          </button>
        </div>
      </div>
    </div>
  );
}