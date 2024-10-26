import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 blackText">
      <h1 className="text-4xl font-bold mb-6">Policies</h1>

      <h2 className="text-2xl font-semibold mt-4">Introduction</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">
        Welcome to Stoic Quotes! I’m Ethan Breitkreutz, and I appreciate your
        visit to my site. As part of Teleta Development, I strive to provide a
        respectful and enriching experience for all users. This policies page
        outlines how I handle your information, content, and user interactions.
      </p>

      <h2 className="text-2xl font-semibold mt-4">Privacy Policy</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">
        I do not collect any personal information, and do not resell any
        information what so ever. The only information I collect is what you
        provide through contact forms, or newsletter subscriptions. How else am
        I supposed to email you?
      </p>
      <ul className="mt-2 list-disc list-inside">
        <li className="mt-4">
          <strong>Data Collection:</strong> The only data I may collect includes
          your name and email address if you choose to contact me.
        </li>
        <li className="mt-4">
          <strong>Data Use:</strong> Any personal information you provide will
          solely be used for communication purposes related to your inquiries.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">Content Policy</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">
        The quotes and content shared on this site are sourced from various
        authors and resources on the internet. I aim to curate and present these
        insights in a way that inspires reflection and personal growth.
      </p>
      <ul className="mt-2 list-disc list-inside">
        <li className="mt-4">
          <strong>Attribution:</strong> I strive to provide proper attribution
          to the authors of the quotes whenever possible. If you notice any
          missing attributions or have concerns about copyright, please contact
          me, and I will address the issue promptly.
        </li>
        <li className="mt-4">
          <strong>Accuracy:</strong> While I strive to ensure the accuracy of
          the quotes and information presented, I cannot guarantee that all
          quotes are free from errors or misinterpretations. Always verify
          information from multiple sources if necessary.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">Contact Policy</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">
        If you have questions, comments, or inquiries regarding my web
        development services or the content on this site, feel free to reach
        out.
      </p>
      <p className="mt-2 text-lg leading-8 text-gray-600">
        <strong>Contact Information:</strong> You can reach me via the contact
        form on this site or directly through my email at{" "}
        <Link href="/contact" className="text-blue-500 underline">this page</Link>
      </p>

      <h2 className="text-2xl font-semibold mt-4">Changes to This Policy</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">
        I may update these policies from time to time to reflect changes in my
        practices. Any updates will be posted on this page with the effective
        date.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Thank you for visiting Stoic Quotes! I appreciate your support and
        interest in Stoicism.
      </p>
    </div>
  );
}
