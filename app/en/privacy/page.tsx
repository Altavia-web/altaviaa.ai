import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-64 flex items-center justify-center">
        <Image
          src="/images/AVA_Header_Imprint_2000x416.webp"
          alt="Privacy Policy Header"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <h1 className="relative z-10 text-white font-bold text-center" style={{fontSize: '69px', lineHeight: '110%', letterSpacing: '0'}}>
          Privacy Policy
        </h1>
      </section>

      {/* Content Section */}
      <div className="mx-auto py-12 px-6" style={{width: '80%'}}>
        <div className="space-y-8" style={{fontFamily: 'Titillium Web', fontSize: '18px', lineHeight: '140%', color: '#000000'}}>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem'}}>1. Data Protection at a Glance</h2>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>General Information</h3>
            <p style={{marginBottom: '1rem'}}>
              The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you. For detailed information on the subject of data protection, please refer to our privacy policy listed below this text.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Data Collection on This Website</h3>
            <p style={{marginBottom: '1rem'}}>
              <strong>Who is responsible for data collection on this website?</strong><br /><br />
              Data processing on this website is carried out by the website operator. You can find their contact details in the section &ldquo;Information on the Responsible Party&rdquo; in this privacy policy.
            </p>

            <p style={{marginBottom: '1rem'}}>
              <strong>How do we collect your data?</strong><br /><br />
              Your data is collected in part by you providing it to us. This may be, for example, data that you enter into a contact form.
            </p>

            <p style={{marginBottom: '1rem'}}>
              Other data is collected automatically or with your consent when you visit the website through our IT systems. This is primarily technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website.
            </p>

            <p style={{marginBottom: '1rem'}}>
              <strong>What do we use your data for?</strong><br /><br />
              Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior. If contracts can be concluded or initiated through the website, the transmitted data will also be processed for contract offers, orders, or other order requests.
            </p>

            <p style={{marginBottom: '1rem'}}>
              <strong>What rights do you have regarding your data?</strong><br /><br />
              You have the right at any time to receive information free of charge about the origin, recipient, and purpose of your stored personal data. You also have the right to request correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right, under certain circumstances, to request restriction of the processing of your personal data.
            </p>

            <p style={{marginBottom: '1rem'}}>
              Furthermore, you have the right to lodge a complaint with the competent supervisory authority.
            </p>

            <p style={{marginBottom: '1rem'}}>
              You can contact us at any time regarding these and other questions on the subject of data protection.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Analysis Tools and Third-Party Tools</h3>
            <p style={{marginBottom: '1rem'}}>
              When visiting this website, your surfing behavior may be statistically evaluated. This is done primarily using so-called analysis programs.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Detailed information on these analysis programs can be found in the following privacy policy.
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>2. Hosting</h2>

            <p style={{marginBottom: '1rem'}}>
              We host the content of our website with the following provider:
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Strato</h3>
            <p style={{marginBottom: '1rem'}}>
              The provider is Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin (hereinafter &ldquo;Strato&rdquo;). When you visit our website, Strato collects various log files including your IP addresses. Further information can be found in Strato&apos;s privacy policy: <a href="https://www.strato.de/datenschutz/" target="_blank" rel="noopener noreferrer" style={{color: '#002e64', textDecoration: 'underline'}}>https://www.strato.de/datenschutz/</a>.
            </p>
            <p style={{marginBottom: '1rem'}}>
              The use of Strato is based on Art. 6 para. 1 lit. f GDPR. We have a legitimate interest in the most reliable presentation of our website possible. If appropriate consent has been requested, processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG, insofar as the consent includes the storage of cookies or access to information in the user&apos;s end device (e.g., device fingerprinting) within the meaning of the TDDDG. The consent can be revoked at any time.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Data Processing Agreement</h3>
            <p style={{marginBottom: '1rem'}}>
              We have concluded a data processing agreement (DPA) for the use of the above-mentioned service. This is a contract required by data protection law that ensures that they process the personal data of our website visitors only according to our instructions and in compliance with the GDPR.
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>3. General Information and Mandatory Information</h2>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Data Protection</h3>
            <p style={{marginBottom: '1rem'}}>
              The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.
            </p>
            <p style={{marginBottom: '1rem'}}>
              When you use this website, various personal data is collected.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Personal data is data that can be used to personally identify you. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done.
            </p>
            <p style={{marginBottom: '1rem'}}>
              We would like to point out that data transmission over the Internet (e.g., when communicating by email) can have security gaps. Complete protection of data from access by third parties is not possible.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Information on the Responsible Party</h3>
            <p style={{marginBottom: '1rem'}}>
              The responsible party for data processing on this website is:
            </p>
            <p style={{marginBottom: '1rem'}}>
              Alta Via Applications GmbH<br />
              Nadistr. 12<br />
              80809 Munich<br />
              info@altaviaa.ai<br /><br />
              Managing Director: Peter von Zimmermann<br />
              Commercial Register: Munich HRB 302272<br /><br />
              Phone: +49 (0) 123 44 55 66<br />
              Email: support@altaviaa.ai
            </p>
            <p style={{marginBottom: '1rem'}}>
              The responsible party is the natural or legal person who, alone or jointly with others, decides on the purposes and means of processing personal data (e.g., names, email addresses, etc.).
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Storage Duration</h3>
            <p style={{marginBottom: '1rem'}}>
              Unless a more specific storage period has been specified within this privacy policy, your personal data will remain with us until the purpose for data processing no longer applies. If you assert a legitimate request for deletion or revoke consent to data processing, your data will be deleted, unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial law retention periods); in the latter case, deletion will occur after these reasons cease to apply.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>General Information on the Legal Basis for Data Processing on This Website</h3>
            <p style={{marginBottom: '1rem'}}>
              If you have consented to data processing, we process your personal data on the basis of Art. 6 para. 1 lit. a GDPR or Art. 9 para. 2 lit. a GDPR, if special categories of data according to Art. 9 para. 1 GDPR are processed. In the case of express consent to the transfer of personal data to third countries, data processing is also carried out on the basis of Art. 49 para. 1 lit. a GDPR. If you have consented to the storage of cookies or access to information in your end device (e.g., via device fingerprinting), data processing is additionally carried out on the basis of § 25 para. 1 TDDDG. The consent can be revoked at any time. If your data is required for contract fulfillment or for the implementation of pre-contractual measures, we process your data on the basis of Art. 6 para. 1 lit. b GDPR. Furthermore, we process your data if this is necessary to fulfill a legal obligation on the basis of Art. 6 para. 1 lit. c GDPR.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Data processing can also be carried out on the basis of our legitimate interest according to Art. 6 para. 1 lit. f GDPR. Information on the relevant legal bases in each individual case is provided in the following paragraphs of this privacy policy.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Recipients of Personal Data</h3>
            <p style={{marginBottom: '1rem'}}>
              In the course of our business activities, we work with various external bodies. This sometimes also requires the transmission of personal data to these external bodies.
            </p>
            <p style={{marginBottom: '1rem'}}>
              We only pass on personal data to external bodies if this is necessary as part of contract fulfillment, if we are legally obliged to do so (e.g., passing on data to tax authorities), if we have a legitimate interest in passing it on according to Art. 6 para. 1 lit. f GDPR, or if another legal basis permits the data transfer. When using processors, we only pass on personal data from our customers on the basis of a valid data processing agreement. In the case of joint processing, a joint processing agreement is concluded.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Revocation of Your Consent to Data Processing</h3>
            <p style={{marginBottom: '1rem'}}>
              Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. The lawfulness of the data processing carried out until the revocation remains unaffected by the revocation.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Right to Object to Data Collection in Special Cases and to Direct Marketing (Art. 21 GDPR)</h3>
            <p style={{marginBottom: '1rem', textTransform: 'uppercase'}}>
              IF DATA PROCESSING IS BASED ON ART. 6 PARA. 1 LIT. E OR F GDPR, YOU HAVE THE RIGHT AT ANY TIME TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS, OR THE PROCESSING SERVES THE ASSERTION, EXERCISE OR DEFENSE OF LEGAL CLAIMS (OBJECTION UNDER ART. 21 PARA. 1 GDPR).
            </p>
            <p style={{marginBottom: '1rem', textTransform: 'uppercase'}}>
              IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR THE PURPOSE OF SUCH MARKETING; THIS ALSO APPLIES TO PROFILING INSOFAR AS IT IS RELATED TO SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION UNDER ART. 21 PARA. 2 GDPR).
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Right to Lodge a Complaint with the Competent Supervisory Authority</h3>
            <p style={{marginBottom: '1rem'}}>
              In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the member state of their habitual residence, their place of work, or the place of the alleged violation. The right to lodge a complaint is without prejudice to other administrative or judicial remedies.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Right to Data Portability</h3>
            <p style={{marginBottom: '1rem'}}>
              You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another controller, this will only be done to the extent that it is technically feasible.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Information, Correction, and Deletion</h3>
            <p style={{marginBottom: '1rem'}}>
              Within the framework of the applicable legal provisions, you have the right at any time to free information about your stored personal data, its origin and recipients, and the purpose of data processing and, if applicable, a right to correction or deletion of this data. You can contact us at any time regarding this and other questions on the subject of personal data.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Right to Restriction of Processing</h3>
            <p style={{marginBottom: '1rem'}}>
              You have the right to request restriction of the processing of your personal data. You can contact us at any time for this purpose. The right to restriction of processing exists in the following cases:
            </p>
            <ul style={{marginBottom: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc'}}>
              <li style={{marginBottom: '0.5rem'}}>If you dispute the accuracy of your personal data stored by us, we usually need time to verify this. For the duration of the verification, you have the right to request restriction of the processing of your personal data.</li>
              <li style={{marginBottom: '0.5rem'}}>If the processing of your personal data was/is unlawful, you can request restriction of data processing instead of deletion.</li>
              <li style={{marginBottom: '0.5rem'}}>If we no longer need your personal data, but you need it for the exercise, defense, or assertion of legal claims, you have the right to request restriction of the processing of your personal data instead of deletion.</li>
              <li style={{marginBottom: '0.5rem'}}>If you have lodged an objection pursuant to Art. 21 para. 1 GDPR, a balance must be struck between your interests and ours. As long as it is not yet clear whose interests prevail, you have the right to request restriction of the processing of your personal data.</li>
            </ul>
            <p style={{marginBottom: '1rem'}}>
              If you have restricted the processing of your personal data, this data may – apart from being stored – only be processed with your consent or for the assertion, exercise, or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the European Union or a member state.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>SSL or TLS Encryption</h3>
            <p style={{marginBottom: '1rem'}}>
              For security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator, this site uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from &ldquo;http://&rdquo; to &ldquo;https://&rdquo; and by the lock symbol in your browser line.
            </p>
            <p style={{marginBottom: '1rem'}}>
              When SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Objection to Promotional Emails</h3>
            <p style={{marginBottom: '1rem'}}>
              The use of contact data published as part of the legal notice obligation to send unsolicited advertising and informational materials is hereby objected to. The operators of the pages expressly reserve the right to take legal action in the event of unsolicited sending of advertising information, such as through spam emails.
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>4. Data Collection on This Website</h2>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Cookies</h3>
            <p style={{marginBottom: '1rem'}}>
              Our website uses so-called &ldquo;cookies&rdquo;. Cookies are small data packages and do not cause any damage to your end device. They are stored on your end device either temporarily for the duration of a session (session cookies) or permanently (permanent cookies). Session cookies are automatically deleted after the end of your visit. Permanent cookies remain stored on your end device until you delete them yourself or automatic deletion by your web browser occurs.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Cookies can come from us (first-party cookies) or from third-party companies (so-called third-party cookies). Third-party cookies enable the integration of certain services from third-party companies within websites (e.g., cookies for processing payment services).
            </p>
            <p style={{marginBottom: '1rem'}}>
              Cookies have various functions. Many cookies are technically necessary, as certain website functions would not work without them (e.g., the shopping cart function or the display of videos). Other cookies can be used to evaluate user behavior or for advertising purposes.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Cookies that are necessary to carry out the electronic communication process, to provide certain functions you have requested (e.g., for the shopping cart function), or to optimize the website (e.g., cookies for measuring web audiences) (necessary cookies) are stored on the basis of Art. 6 para. 1 lit. f GDPR, unless another legal basis is specified.
            </p>
            <p style={{marginBottom: '1rem'}}>
              The website operator has a legitimate interest in storing necessary cookies for the technically error-free and optimized provision of its services. If consent to the storage of cookies and comparable recognition technologies has been requested, processing is carried out exclusively on the basis of this consent (Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG); consent can be revoked at any time.
            </p>
            <p style={{marginBottom: '1rem'}}>
              You can set your browser so that you are informed about the setting of cookies and only allow cookies in individual cases, exclude the acceptance of cookies for certain cases or generally, and activate the automatic deletion of cookies when closing the browser. When deactivating cookies, the functionality of this website may be limited.
            </p>
            <p style={{marginBottom: '1rem'}}>
              You can find out which cookies and services are used on this website in this privacy policy.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Server Log Files</h3>
            <p style={{marginBottom: '1rem'}}>
              The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:
            </p>
            <ul style={{marginBottom: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc'}}>
              <li>Browser type and browser version</li>
              <li>Operating system used</li>
              <li>Referrer URL</li>
              <li>Hostname of the accessing computer</li>
              <li>Time of server request</li>
              <li>IP address</li>
            </ul>
            <p style={{marginBottom: '1rem'}}>
              This data is not merged with other data sources.
            </p>
            <p style={{marginBottom: '1rem'}}>
              The collection of this data is based on Art. 6 para. 1 lit. f GDPR. The website operator has a legitimate interest in the technically error-free presentation and optimization of its website – for this purpose, server log files must be collected.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Contact via Email, Phone, or Fax</h3>
            <p style={{marginBottom: '1rem'}}>
              If you contact us by email, phone, or fax, your inquiry including all resulting personal data (name, inquiry) will be stored and processed by us for the purpose of handling your request. We do not pass on this data without your consent.
            </p>
            <p style={{marginBottom: '1rem'}}>
              The processing of this data is based on Art. 6 para. 1 lit. b GDPR if your inquiry is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in effectively handling inquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested; consent can be revoked at any time.
            </p>
            <p style={{marginBottom: '1rem'}}>
              The data you send to us via contact requests remains with us until you request us to delete it, revoke your consent to storage, or the purpose for data storage no longer applies (e.g., after completion of your request). Mandatory statutory provisions – in particular statutory retention periods – remain unaffected.
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>5. Newsletter</h2>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Newsletter Distribution to Existing Customers</h3>
            <p style={{marginBottom: '1rem'}}>
              If you order goods or services from us and provide your email address in the process, this email address may subsequently be used by us to send newsletters, provided we inform you about this in advance. In such a case, only direct advertising for our own similar goods or services will be sent via the newsletter. The sending of this newsletter can be canceled by you at any time. For this purpose, there is a corresponding link in each newsletter.
            </p>
            <p style={{marginBottom: '1rem'}}>
              The legal basis for sending the newsletter in this case is Art. 6 para. 1 lit. f GDPR in conjunction with § 7 para. 3 UWG.
            </p>
            <p style={{marginBottom: '1rem'}}>
              After you unsubscribe from the newsletter distribution list, your email address may be stored in a blacklist with us to prevent future mailings to you. The data from the blacklist is used only for this purpose and is not merged with other data. This serves both your interest and our interest in complying with legal requirements when sending newsletters (legitimate interest within the meaning of Art. 6 para. 1 lit. f GDPR). Storage in the blacklist is not time-limited. You can object to the storage if your interests outweigh our legitimate interest.
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>6. Analysis Tools</h2>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Google Analytics</h3>
            <p style={{marginBottom: '1rem'}}>
              This website uses functions of the web analytics service Google Analytics. The provider is Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Google Analytics uses so-called &ldquo;cookies&rdquo;. These are text files that are stored on your computer and enable analysis of your use of the website. The information generated by the cookie about your use of this website is usually transmitted to a Google server in the USA and stored there.
            </p>
            <p style={{marginBottom: '1rem'}}>
              The storage of Google Analytics cookies is based on Art. 6 para. 1 lit. f GDPR. The website operator has a legitimate interest in analyzing user behavior in order to optimize both its web offering and its advertising.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>IP Anonymization</h3>
            <p style={{marginBottom: '1rem'}}>
              We have activated the IP anonymization function on this website. As a result, your IP address will be shortened by Google within member states of the European Union or in other contracting states of the Agreement on the European Economic Area before transmission to the USA.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Only in exceptional cases will the full IP address be transmitted to a Google server in the USA and shortened there. On behalf of the operator of this website, Google will use this information to evaluate your use of the website, to compile reports on website activity, and to provide other services related to website use and internet use to the website operator. The IP address transmitted by your browser as part of Google Analytics will not be merged with other Google data.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Browser Plugin</h3>
            <p style={{marginBottom: '1rem'}}>
              You can prevent the storage of cookies by setting your browser software accordingly; however, we would like to point out that in this case you may not be able to use all functions of this website to their full extent.
            </p>
            <p style={{marginBottom: '1rem'}}>
              You can also prevent the collection of data generated by the cookie and related to your use of the website (including your IP address) to Google and the processing of this data by Google by downloading and installing the browser plugin available at the following link: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" style={{color: '#002e64', textDecoration: 'underline'}}>https://tools.google.com/dlpage/gaoptout?hl=de</a>.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Objection to Data Collection</h3>
            <p style={{marginBottom: '1rem'}}>
              You can prevent the collection of your data by Google Analytics by clicking on the following link. An opt-out cookie will be set that prevents the collection of your data during future visits to this website: Deactivate Google Analytics.
            </p>
            <p style={{marginBottom: '1rem'}}>
              More information on how Google Analytics handles user data can be found in Google&apos;s privacy policy: <a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener noreferrer" style={{color: '#002e64', textDecoration: 'underline'}}>https://support.google.com/analytics/answer/6004245?hl=de</a>.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Order Data Processing</h3>
            <p style={{marginBottom: '1rem'}}>
              We have concluded an order data processing contract with Google and fully implement the strict requirements of the German data protection authorities when using Google Analytics.
            </p>

            <h3 style={{fontWeight: 700, fontSize: '24px', lineHeight: '110%', color: '#002e64', marginBottom: '1rem', marginTop: '1.5rem'}}>Demographic Characteristics in Google Analytics</h3>
            <p style={{marginBottom: '1rem'}}>
              This website uses the &ldquo;demographic characteristics&rdquo; function of Google Analytics. This enables the creation of reports that contain statements about the age, gender, and interests of site visitors.
            </p>
            <p style={{marginBottom: '1rem'}}>
              This data comes from interest-based advertising from Google and visitor data from third-party providers. This data cannot be assigned to a specific person. You can deactivate this function at any time via the ad settings in your Google account or generally prohibit the collection of your data by Google Analytics as outlined in the &ldquo;Objection to Data Collection&rdquo; section.
            </p>
          </section>

          <section>
            <h2 style={{fontWeight: 700, fontSize: '44px', lineHeight: '110%', color: '#002e64', marginBottom: '1.5rem', marginTop: '2rem'}}>7. Webinars</h2>

            <p style={{marginBottom: '1rem'}}>
              For webinars, we use the webinar platform from WebinarGeek.com (Chroomstraat 12, 2718 RR Zoetermeer, Netherlands).
            </p>
            <p style={{marginBottom: '1rem'}}>
              For registration and conducting online seminars, we use the data you transmit to us when registering for the respective seminar, namely first name, last name, email, company/employer, and postal code.
            </p>
            <p style={{marginBottom: '1rem'}}>
              After registration, we use your email address to confirm registration, to send dial-in information, and to remind you of the upcoming appointment shortly before the webinar. After a webinar, we use your email address and your name once to send you an email and give you access to the recordings of the online seminar.
            </p>
            <p style={{marginBottom: '1rem'}}>
              During the online seminar, we receive the following data from you: name, first name, email address for identification and login, country, IP address, and cookies to manage the internet session and ensure the provision of the webinar. The processing of your data takes place only within the scope of the online seminar.
            </p>
            <p style={{marginBottom: '1rem'}}>
              The legal basis for the aforementioned data processing is Art. 6 para. 1 lit. b GDPR. The processing serves exclusively for contract fulfillment in the form of conducting and preparing and following up on the participation agreement for the respective webinar.
            </p>
            <p style={{marginBottom: '1rem'}}>
              A data processing agreement has been concluded with Webinargeek. Webinargeek processes the data exclusively in the European Union. A transfer of your personal data to third countries does not take place.
            </p>
            <p style={{marginBottom: '1rem'}}>
              Further information on data protection at Webinargeek can be found at: <a href="https://www.webinargeek.com/security-and-availability" target="_blank" rel="noopener noreferrer" style={{color: '#002e64', textDecoration: 'underline'}}>https://www.webinargeek.com/security-and-availability</a>
            </p>
          </section>

        </div>
      </div>
      <Footer locale="en" />
    </div>
  );
}
