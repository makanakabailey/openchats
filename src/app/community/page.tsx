'use client';

import { useState } from 'react';
import CommunityHero from '@/components/features/community/CommunityHero';
import LiveEventBanner from '@/components/features/community/LiveEventBanner';
import CommunityGrid from '@/components/features/community/CommunityGrid';
import MembershipTiers from '@/components/features/membership/MembershipTiers';
import SubmissionModal from '@/components/features/community/SubmissionModal';

export default function CommunityPage() {
  const [submissionModal, setSubmissionModal] = useState<'idea' | 'topic' | 'operator-art' | null>(null);

  return (
    <div className="min-h-screen bg-studio-black">
      <CommunityHero />
      <LiveEventBanner />
      <CommunityGrid onSubmissionClick={setSubmissionModal} />
      
      {/* Membership Section */}
      <MembershipTiers />

      {/* Submission Modals */}
      <SubmissionModal 
        isOpen={submissionModal === 'idea'} 
        onClose={() => setSubmissionModal(null)} 
        type="idea" 
      />
      <SubmissionModal 
        isOpen={submissionModal === 'topic'} 
        onClose={() => setSubmissionModal(null)} 
        type="topic" 
      />
      <SubmissionModal 
        isOpen={submissionModal === 'operator-art'} 
        onClose={() => setSubmissionModal(null)} 
        type="operator-art" 
      />
    </div>
  );
}