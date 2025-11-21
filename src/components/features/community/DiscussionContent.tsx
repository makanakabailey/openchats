interface Discussion {
  id: number;
  content: string;
}

interface DiscussionContentProps {
  discussion: Discussion;
}

export default function DiscussionContent({ discussion }: DiscussionContentProps) {
  // Split content by line breaks and render as paragraphs
  const paragraphs = discussion.content.split('\n\n');

  return (
    <div className="bg-card-dark rounded-lg p-6 border border-zinc-700">
      <div className="prose prose-invert max-w-none">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-text-body leading-relaxed mb-4 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}