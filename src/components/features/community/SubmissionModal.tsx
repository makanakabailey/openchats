'use client';

import { useState } from 'react';
import { X, Image as ImageIcon, VideoCamera, Paperclip } from '@phosphor-icons/react';

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'idea' | 'topic' | 'operator-art';
}

export default function SubmissionModal({ isOpen, onClose, type }: SubmissionModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  if (!isOpen) return null;

  const config = {
    idea: {
      title: 'Submit an Idea',
      icon: '💡',
      placeholder: "What's your idea for improving the show?",
      description: 'Share your suggestions for new features, segments, or improvements.',
      requiresMedia: false,
    },
    topic: {
      title: 'Submit a Topic',
      icon: '📝',
      placeholder: 'What topic should we cover?',
      description: "Suggest topics you'd like to hear discussed on the podcast.",
      requiresMedia: false,
    },
    'operator-art': {
      title: 'Submit Operator Art',
      icon: '🎨',
      placeholder: 'Tell us about your artwork',
      description: 'Share your creative work inspired by Open Chats. Art, designs, memes - we want to see it all!',
      requiresMedia: true,
    },
  };

  const currentConfig = config[type];

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
    if (!title.trim() || !description.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    if (currentConfig.requiresMedia && selectedFiles.length === 0) {
      alert('Please upload at least one file for your submission');
      return;
    }

    console.log('Submission:', {
      type,
      title,
      description,
      files: selectedFiles,
    });

    // Reset form
    setTitle('');
    setDescription('');
    setSelectedFiles([]);
    onClose();
    
    alert('Submission received! We will review it soon. 🔥');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-card-dark rounded-lg border border-zinc-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-700 sticky top-0 bg-card-dark">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{currentConfig.icon}</span>
            <h2 className="font-display text-2xl font-black uppercase text-white">
              {currentConfig.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-white transition-colors"
          >
            <X size={24} weight="bold" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          <p className="text-text-body">
            {currentConfig.description}
          </p>

          {/* Title */}
          <div>
            <label className="block font-semibold text-white mb-2">
              Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={currentConfig.placeholder}
              maxLength={150}
              className="w-full px-4 py-3 bg-studio-black border border-zinc-700 rounded-lg text-white placeholder:text-text-muted focus:border-spicy-orange focus:outline-none"
            />
            <p className="text-text-muted text-sm mt-1">
              {title.length} / 150 characters
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold text-white mb-2">
              Description *
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide more details..."
              rows={6}
              maxLength={2000}
              className="w-full px-4 py-3 bg-studio-black border border-zinc-700 rounded-lg text-white placeholder:text-text-muted focus:border-spicy-orange focus:outline-none resize-none"
            />
            <p className="text-text-muted text-sm mt-1">
              {description.length} / 2000 characters
            </p>
          </div>

          {/* File Upload */}
          <div>
            <label className="block font-semibold text-white mb-2">
              Media {currentConfig.requiresMedia && '*'}
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-3">
                <label className="flex flex-col items-center justify-center gap-2 px-4 py-6 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-white cursor-pointer transition-colors">
                  <ImageIcon size={24} weight="bold" />
                  <span className="text-sm">Images</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </label>
                <label className="flex flex-col items-center justify-center gap-2 px-4 py-6 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-white cursor-pointer transition-colors">
                  <VideoCamera size={24} weight="bold" />
                  <span className="text-sm">Videos</span>
                  <input
                    type="file"
                    accept="video/*"
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </label>
                <label className="flex flex-col items-center justify-center gap-2 px-4 py-6 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-white cursor-pointer transition-colors">
                  <Paperclip size={24} weight="bold" />
                  <span className="text-sm">Files</span>
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
                        ) : file.type.startsWith('video/') ? (
                          <VideoCamera size={20} className="text-spicy-orange" />
                        ) : (
                          <Paperclip size={20} className="text-spicy-orange" />
                        )}
                        <div>
                          <p className="text-white text-sm font-medium">{file.name}</p>
                          <p className="text-text-muted text-xs">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
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
                {type === 'operator-art' 
                  ? 'Upload your artwork (images, videos, or files). Max 50MB per file.'
                  : 'Optional: Add supporting media. Max 50MB per file.'}
              </p>
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
            <h4 className="font-semibold text-white mb-2">Submission Guidelines</h4>
            <ul className="text-text-muted text-sm space-y-1">
              <li>• Be creative and authentic</li>
              <li>• Keep it relevant to Open Chats</li>
              {type === 'operator-art' && <li>• Original work only - give credit if inspired by others</li>}
              {type === 'topic' && <li>• Explain why this topic matters</li>}
              <li>• We review all submissions but cannot respond to everyone</li>
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
            disabled={!title.trim() || !description.trim() || (currentConfig.requiresMedia && selectedFiles.length === 0)}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
