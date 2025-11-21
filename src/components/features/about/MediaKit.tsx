import { DownloadSimple, EnvelopeSimple, ChartLine } from '@phosphor-icons/react/dist/ssr';

export default function MediaKit() {
  const mediaKitItems = [
    {
      title: 'Brand Assets',
      description: 'Logos, colors, and typography guidelines',
      size: '2.5 MB',
    },
    {
      title: 'Press Photos',
      description: 'High-resolution images of Mtho & Sino',
      size: '15 MB',
    },
    {
      title: 'Fact Sheet',
      description: 'Stats, demographics, and key information',
      size: '500 KB',
    },
  ];

  const demographics = [
    { label: 'Primary Audience', value: '18-35 years old' },
    { label: 'Gender Split', value: '60% Male, 40% Female' },
    { label: 'Top Locations', value: 'Pretoria, Johannesburg, Cape Town' },
    { label: 'Engagement Rate', value: '12.5% (Industry avg: 3%)' },
  ];

  return (
    <section className="py-20 px-4 bg-card-dark">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase text-white mb-4">
            WORK WITH US
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Interested in partnerships, sponsorships, or collaborations? 
            Download our media kit or get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Media Kit Downloads */}
          <div className="bg-studio-black rounded-lg p-8 border border-zinc-700">
            <div className="flex items-center gap-3 mb-6">
              <DownloadSimple size={32} weight="bold" className="text-spicy-orange" />
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                Media Kit
              </h3>
            </div>
            
            <div className="space-y-4 mb-6">
              {mediaKitItems.map((item) => (
                <div 
                  key={item.title}
                  className="flex items-center justify-between p-4 bg-card-dark rounded-lg border border-zinc-700 hover:border-spicy-orange transition-colors"
                >
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-text-muted text-sm">{item.description}</p>
                  </div>
                  <div className="text-text-muted text-sm">{item.size}</div>
                </div>
              ))}
            </div>

            <button className="w-full btn-primary">
              <DownloadSimple size={20} weight="bold" className="inline mr-2" />
              DOWNLOAD FULL MEDIA KIT
            </button>
          </div>

          {/* Demographics */}
          <div className="bg-studio-black rounded-lg p-8 border border-zinc-700">
            <div className="flex items-center gap-3 mb-6">
              <ChartLine size={32} weight="bold" className="text-spicy-orange" />
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                Audience Demographics
              </h3>
            </div>
            
            <div className="space-y-6">
              {demographics.map((demo) => (
                <div key={demo.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-muted">{demo.label}</span>
                    <span className="font-semibold text-white">{demo.value}</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-spicy-orange rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-card-dark rounded-lg border border-zinc-700">
              <p className="text-text-body text-sm">
                <strong className="text-white">Note:</strong> Our audience is highly engaged, 
                with an average watch time of 35+ minutes per episode and strong social media presence.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-spicy-orange to-electric-purple rounded-2xl p-12 text-center">
          <EnvelopeSimple size={64} weight="bold" className="text-white mx-auto mb-6" />
          <h3 className="font-display text-3xl md:text-4xl font-black uppercase text-white mb-4">
            LET'S COLLABORATE
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Interested in sponsorships, guest appearances, or partnerships? 
            We're always open to working with brands that align with our unfiltered approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-spicy-orange px-8 py-4 rounded-lg font-bold uppercase hover:bg-gray-100 transition-colors"
            >
              GET IN TOUCH
            </a>
            <a 
              href="mailto:partnerships@openchats.co.za"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold uppercase hover:bg-white/10 transition-colors"
            >
              EMAIL US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}