import { useEffect } from "react";

const PrivacyPolicy = () => {
  // 🔼 Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0f0f0f] text-white pt-10 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-20">
              Privacy Policy
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Your privacy is important to me
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-300 text-base leading-relaxed">
          <p>
            This website is a personal portfolio developed and maintained by
            Sakshi. I do not collect any personal information without your
            consent.
          </p>

          <p>
            Any data submitted through the contact form (like your name, email,
            and message) is used solely for communication purposes and is not
            shared with third parties.
          </p>

          <p>
            I use Web3Forms for handling contact form submissions. Please refer
            to their privacy terms for more details.
          </p>

          <p>
            No cookies or trackers are used to monitor your activity on this
            site. However, embedded third-party tools (like GitHub or LinkedIn
            links) may have their own tracking policies.
          </p>

          <p>
            By using this website, you agree to the terms of this privacy
            policy. Any updates will be reflected here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
