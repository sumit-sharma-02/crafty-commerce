import React from "react";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <main className="mb-20 sm:mb-40">
      {/* <!--------------Breadcrumb-----------------------> */}
      <div className="flex items-center px-4 pt-6 text-sm font-medium uppercase text-gray-500 sm:px-10 xl:px-24">
        {/* <!--------------> */}
        <Link className="flex items-center hover:text-primary" to={"/"}>
          <span>
            <FcAbout className="mr-1 h-4 w-4" />
          </span>
          <span>ABOUT US</span>
        </Link>
        {/* <!--------------> */}
        <span className=" mx-1 mt-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        {/* <!--------------> */}
        <Link className="cursor-pointe text-gray-400">Terms & Conditions</Link>
      </div>
      {/* <!--------------Breadcrumb End-----------> */}
      {/* <!-- == Terms and Condition == --> */}
      <section className="px-4 pt-5 sm:px-10 xl:px-24">
        {/* <!------001-------> */}
        <div className=" text-gray-500">
          <h4 className=" mt-5 text-2xl font-bold tracking-tight text-black">
            AGREEMENT TO TERMS
          </h4>
          <br />
          These Terms and Conditions constitute a legally binding agreement made
          between you, whether personally or on behalf of an entity (“you”) and
          [business entity name] (“we,” “us” or “our”), concerning your access
          to and use of the [website name.com] website as well as any other
          media form, media channel, mobile website or mobile application
          related, linked, or otherwise connected thereto (collectively, the
          “Site”).
          <br />
          You agree that by accessing the Site, you have read, understood, and
          agree to be bound by all of these Terms and Conditions. If you do not
          agree with all of these Terms and Conditions, then you are expressly
          prohibited from using the Site and you must discontinue use
          immediately.
          <br />
          Supplemental terms and conditions or documents that may be posted on
          the Site from time to time are hereby expressly incorporated herein by
          reference. We reserve the right, in our sole discretion, to make
          changes or modifications to these Terms and Conditions at any time and
          for any reason.
          <br />
          We will alert you about any changes by updating the “Last updated”
          date of these Terms and Conditions, and you waive any right to receive
          specific notice of each such change.
          <br />
          It is your responsibility to periodically review these Terms and
          Conditions to stay informed of updates. You will be subject to, and
          will be deemed to have been made aware of and to have accepted, the
          changes in any revised Terms and Conditions by your continued use of
          the Site after the date such revised Terms and Conditions are posted.
          <br />
          The information provided on the Site is not intended for distribution
          to or use by any person or entity in any jurisdiction or country where
          such distribution or use would be contrary to law or regulation or
          which would subject us to any registration requirement within such
          jurisdiction or country.
          <br />
          Accordingly, those persons who choose to access the Site from other
          locations do so on their own initiative and are solely responsible for
          compliance with local laws, if and to the extent local laws are
          applicable.
          <br />
          These terms and conditions were created using Termly.
          <br />
          <ul className="my-4 ml-6 list-disc">
            <li>
              Option 1: The Site is intended for users who are at least 18 years
              old. Persons under the age of 18 are not permitted to register for
              the Site.{" "}
            </li>
            <li>
              Option 2: [The Site is intended for users who are at least 13
              years of age.] All users who are minors in the jurisdiction in
              which they reside (generally under the age of 18) must have the
              permission of, and be directly supervised by, their parent or
              guardian to use the Site. If you are a minor, you must have your
              parent or guardian read and agree to these Terms and Conditions
              prior to you using the Site.{" "}
            </li>
          </ul>
          <br />
          <h4 className=" mt-5 text-2xl font-bold tracking-tight text-black">
            INTELLECTUAL PROPERTY RIGHTS
          </h4>
          <br />
          Unless otherwise indicated, the Site is our proprietary property and
          all source code, databases, functionality, software, website designs,
          audio, video, text, photographs, and graphics on the Site
          (collectively, the “Content”) and the trademarks, service marks, and
          logos contained therein (the “Marks”) are owned or controlled by us or
          licensed to us, and are protected by copyright and trademark laws and
          various other intellectual property rights and unfair competition laws
          of the United States, foreign jurisdictions, and international
          conventions.
          <br />
          The Content and the Marks are provided on the Site “AS IS” for your
          information and personal use only. Except as expressly provided in
          these Terms and Conditions, no part of the Site and no Content or
          Marks may be copied, reproduced, aggregated, republished, uploaded,
          posted, publicly displayed, encoded, translated, transmitted,
          distributed, sold, licensed, or otherwise exploited for any commercial
          purpose whatsoever, without our express prior written permission.
          <br />
          Provided that you are eligible to use the Site, you are granted a
          limited license to access and use the Site and to download or print a
          copy of any portion of the Content to which you have properly gained
          access solely for your personal, non-commercial use. We reserve all
          rights not expressly granted to you in and to the Site, the Content
          and the Marks.
          <br />
          <br />
          <h4 className=" mt-5 text-2xl font-bold tracking-tight text-black">
            USER REPRESENTATIONS
          </h4>
          <br />
          By using the Site, you represent and warrant that:
          <br />
          <ul className="my-4 ml-6 list-disc">
            <li>
              All registration information you submit will be true, accurate,
              current, and complete;{" "}
            </li>
            <li>
              You will maintain the accuracy of such information and promptly
              update such registration information as necessary;]{" "}
            </li>
            <li>
              You have the legal capacity and you agree to comply with these
              Terms and Conditions;{" "}
            </li>
            <li>You are not under the age of 13</li>
            <li>
              Not a minor in the jurisdiction in which you reside, or if a
              minor, you have received parental permission to use the Site{" "}
            </li>
            <li>
              You will not access the Site through automated or non-human means,
              whether through a bot, script, or otherwise;{" "}
            </li>
            <li>
              You will not use the Site for any illegal or unauthorized purpose;{" "}
            </li>
            <li>
              Your use of the Site will not violate any applicable law or
              regulation.
            </li>
          </ul>
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Site (or
          any portion thereof).
          <br />
          <br />
          <h4 className=" mt-5 text-2xl font-bold tracking-tight text-black">
            USER REGISTRATION
          </h4>
          <br />
          You may be required to register with the Site. You agree to keep your
          password confidential and will be responsible for all use of your
          account and password. We reserve the right to remove, reclaim, or
          change a username you select if we determine, in our sole discretion,
          that such username is inappropriate, obscene, or otherwise
          objectionable.
          <br />
          <br />
          <h4 className=" mt-5 text-2xl font-bold tracking-tight text-black">
            PROHIBITED ACTIVITIES
          </h4>
          <br />
          You may not access or use the Site for any purpose other than that for
          which we make the Site available. The Site may not be used in
          connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
          <br />
          As a user of the Site, you agree not to:
          <br />
          <ul className="my-4 ml-6 list-disc">
            <li>
              Systematically retrieve data or other content from the Site to
              create or compile, directly or indirectly, a collection,
              compilation, database, or directory without written permission
              from us.
            </li>
            <li>
              Make any unauthorized use of the Site, including collecting
              usernames and/or email addresses of users by electronic or other
              means for the purpose of sending unsolicited email, or creating
              user accounts by automated means or under false pretenses.
            </li>
            <li>
              Use a buying agent or purchasing agent to make purchases on the
              Site.
            </li>
            <li>
              Use the Site to advertise or offer to sell goods and services.
            </li>
            <li>
              Circumvent, disable, or otherwise interfere with security-related
              features of the Site, including features that prevent or restrict
              the use or copying of any Content or enforce limitations on the
              use of the Site and/or the Content contained therein.
            </li>
            <li>Engage in unauthorized framing of or linking to the Site.</li>
            <li>
              Trick, defraud, or mislead us and other users, especially in any
              attempt to learn sensitive account information such as user
              passwords;
            </li>
            <li>
              Make improper use of our support services or submit false reports
              of abuse or misconduct.
            </li>
            <li>
              Engage in any automated use of the system, such as using scripts
              to send comments or messages, or using any data mining, robots, or
              similar data gathering and extraction tools.
            </li>
            <li>
              Interfere with, disrupt, or create an undue burden on the Site or
              the networks or services connected to the Site.
            </li>
            <li>
              Attempt to impersonate another user or person or use the username
              of another user.
            </li>
            <li>Sell or otherwise transfer your profile.</li>
            <li>
              Use any information obtained from the Site in order to harass,
              abuse, or harm another person.
            </li>
            <li>
              Use the Site as part of any effort to compete with us or otherwise
              use the Site and/or the Content for any revenue-generating
              endeavor or commercial enterprise.
            </li>
            <li>
              Decipher, decompile, disassemble, or reverse engineer any of the
              software comprising or in any way making up a part of the Site.
            </li>
            <li>
              Attempt to bypass any measures of the Site designed to prevent or
              restrict access to the Site, or any portion of the Site.
            </li>
            <li>
              Harass, annoy, intimidate, or threaten any of our employees or
              agents engaged in providing any portion of the Site to you.
            </li>
            <li>
              Delete the copyright or other proprietary rights notice from any
              Content.
            </li>
            <li>
              Copy or adapt the Site’s software, including but not limited to
              Flash, PHP, HTML, JavaScript, or other code.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) viruses,
              Trojan horses, or other material, including excessive use of
              capital letters and spamming (continuous posting of repetitive
              text), that interferes with any party’s uninterrupted use and
              enjoyment of the Site or modifies, impairs, disrupts, alters, or
              interferes with the use, features, functions, operation, or
              maintenance of the Site.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) any
              material that acts as a passive or active information collection
              or transmission mechanism, including without limitation, clear
              graphics interchange formats (“gifs”), 1×1 pixels, web bugs,
              cookies, or other similar devices (sometimes referred to as
              “spyware” or “passive collection mechanisms” or “pcms”).
            </li>
            <li>
              Except as may be the result of standard search engine or Internet
              browser usage, use, launch, develop, or distribute any automated
              system, including without limitation, any spider, robot, cheat
              utility, scraper, or offline reader that accesses the Site, or
              using or launching any unauthorized script or other software.
            </li>
            <li>
              Disparage, tarnish, or otherwise harm, in our opinion, us and/or
              the Site.
            </li>
            <li>
              Use the Site in a manner inconsistent with any applicable laws or
              regulations.
            </li>
          </ul>
          <br />
          <h4 className=" mt-5 text-2xl font-bold tracking-tight text-black">
            USER GENERATED CONTRIBUTIONS
          </h4>
          <br />
          The Site may invite you to chat, contribute to, or participate in
          blogs, message boards, online forums, and other functionality, and may
          provide you with the opportunity to create, submit, post, display,
          transmit, perform, publish, distribute, or broadcast content and
          materials to us or on the Site, including but not limited to text,
          writings, video, audio, photographs, graphics, comments, suggestions,
          or personal information or other material (collectively,
          "Contributions"). Contributions may be viewable by other users of the
          Site and through third-party websites. As such, any Contributions you
          transmit may be treated as non-confidential and non-proprietary. When
          you create or make available any Contributions, you thereby represent
          and warrant that:
          <br />
          <ul className="my-4 ml-6 list-disc">
            <li>
              The creation, distribution, transmission, public display, or
              performance, and the accessing, downloading, or copying of your
              Contributions do not and will not infringe the proprietary rights,
              including but not limited to the copyright, patent, trademark,
              trade secret, or moral rights of any third party.
            </li>
            <li>
              You are the creator and owner of or have the necessary licenses,
              rights, consents, releases, and permissions to use and to
              authorize us, the Site, and other users of the Site to use your
              Contributions in any manner contemplated by the Site and these
              Terms and Conditions.
            </li>
            <li>
              You have the written consent, release, and/or permission of each
              and every identifiable individual person in your Contributions to
              use the name or likeness of each and every such identifiable
              individual person to enable inclusion and use of your
              Contributions in any manner contemplated by the Site and these
              Terms and Conditions.
            </li>
            <li>
              Your Contributions are not false, inaccurate, or misleading.
            </li>
            <li>
              Your Contributions are not unsolicited or unauthorized
              advertising, promotional materials, pyramid schemes, chain
              letters, spam, mass mailings, or other forms of solicitation.
            </li>
            <li>
              Your Contributions are not obscene, lewd, lascivious, filthy,
              violent, harassing, libelous, slanderous, or otherwise
              objectionable (as determined by us).
            </li>
            <li>
              Your Contributions do not ridicule, mock, disparage, intimidate,
              or abuse anyone.
            </li>
            <li>
              Your Contributions do not advocate the violent overthrow of any
              government or incite, encourage, or threaten physical harm against
              another.
            </li>
            <li>
              Your Contributions do not violate any applicable law, regulation,
              or rule.
            </li>
            <li>
              Your Contributions do not violate the privacy or publicity rights
              of any third party.
            </li>
            <li>
              Your Contributions do not contain any material that solicits
              personal information from anyone under the age of 18 or exploits
              people under the age of 18 in a sexual or violent manner.
            </li>
            <li>
              Your Contributions do not violate any federal or state law
              concerning child pornography, or otherwise intended to protect the
              health or well-being of minors;
            </li>
            <li>
              Your Contributions do not include any offensive comments that are
              connected to race, national origin, gender, sexual preference, or
              physical handicap.
            </li>
            <li>
              Your Contributions do not otherwise violate, or link to material
              that violates, any provision of these Terms and Conditions, or any
              applicable law or regulation.
            </li>
          </ul>
          Any use of the Site in violation of the foregoing violates these Terms
          and Conditions and may result in, among other things, termination or
          suspension of your rights to use the Site.
          <br />
          <br />
          <h4 className=" mt-5 text-2xl font-bold tracking-tight text-black">
            CONTRIBUTION LICENSE
          </h4>
          <br />
          By posting your Contributions to any part of the Site [or making
          Contributions accessible to the Site by linking your account from the
          Site to any of your social networking accounts], you automatically
          grant, and you represent and warrant that you have the right to grant,
          to us an unrestricted, unlimited, irrevocable, perpetual,
          non-exclusive, transferable, royalty-free, fully-paid, worldwide
          right, and license to host, use, copy, reproduce, disclose, sell,
          resell, publish, broadcast, retitle, archive, store, cache, publicly
          perform, publicly display, reformat, translate, transmit, excerpt (in
          whole or in part), and distribute such Contributions (including,
          without limitation, your image and voice) for any purpose, commercial,
          advertising, or otherwise, and to prepare derivative works of, or
          incorporate into other works, such Contributions, and grant and
          authorize sublicenses of the foregoing. The use and distribution may
          occur in any media formats and through any media channels.
          <br />
          This license will apply to any form, media, or technology now known or
          hereafter developed, and includes our use of your name, company name,
          and franchise name, as applicable, and any of the trademarks, service
          marks, trade names, logos, and personal and commercial images you
          provide. You waive all moral rights in your Contributions, and you
          warrant that moral rights have not otherwise been asserted in your
          Contributions.
          <br />
          We do not assert any ownership over your Contributions. You retain
          full ownership of all of your Contributions and any intellectual
          property rights or other proprietary rights associated with your
          Contributions. We are not liable for any statements or representations
          in your Contributions provided by you in any area on the Site.
          <br />
          You are solely responsible for your Contributions to the Site and you
          expressly agree to exonerate us from any and all responsibility and to
          refrain from any legal action against us regarding your Contributions.
          <br />
          We have the right, in our sole and absolute discretion,
          <br />
          <ul className="my-4 ml-6 list-disc">
            <li>To edit, redact, or otherwise change any Contributions; </li>
            <li>
              To re-categorize any Contributions to place them in more
              appropriate locations on the Site; and{" "}
            </li>
            <li>
              To pre-screen or delete any Contributions at any time and for any
              reason, without notice. We have no obligation to monitor your
              Contributions.
            </li>
          </ul>
          <br />
          <h4 className=" mt-5 text-2xl font-bold tracking-tight text-black">
            GUIDELINES FOR REVIEWS
          </h4>
          <br />
          We may provide you areas on the Site to leave reviews or ratings. When
          posting a review, you must comply with the following criteria:
          <ul className="my-4 ml-6 list-disc">
            <li>
              You should have firsthand experience with the person/entity being
              reviewed;{" "}
            </li>
            <li>
              Your reviews should not contain offensive profanity, or abusive,
              racist, offensive, or hate language;{" "}
            </li>

            <li>
              Your reviews should not contain discriminatory references based on
              religion, race, gender, national origin, age, marital status,
              sexual orientation, or disability;{" "}
            </li>

            <li>
              Your reviews should not contain references to illegal activity;{" "}
            </li>

            <li>
              You should not be affiliated with competitors if posting negative
              reviews;{" "}
            </li>

            <li>
              You should not make any conclusions as to the legality of conduct;{" "}
            </li>

            <li>You may not post any false or misleading statements; </li>

            <li>
              You may not organize a campaign encouraging others to post
              reviews, whether positive or negative.{" "}
            </li>
          </ul>
          We may accept, reject, or remove reviews in our sole discretion. We
          have absolutely no obligation to screen reviews or to delete reviews,
          even if anyone considers reviews objectionable or inaccurate. Reviews
          are not endorsed by us, and do not necessarily represent our opinions
          or the views of any of our affiliates or partners.
          <br />
          We do not assume liability for any review or for any claims,
          liabilities, or losses resulting from any review. By posting a review,
          you hereby grant to us a perpetual, non-exclusive, worldwide,
          royalty-free, fully-paid, assignable, and sublicensable right and
          license to reproduce, modify, translate, transmit by any means,
          display, perform, and/or distribute all content relating to reviews.
          <br />
          <br />
          <h4 className=" mt-5 text-2xl font-bold tracking-tight text-black">
            MOBILE APPLICATION LICENSE
          </h4>
          <br />
          Use License If you access the Site via a mobile application, then we
          grant you a revocable, non-exclusive, non-transferable, limited right
          to install and use the mobile application on wireless electronic
          devices owned or controlled by you, and to access and use the mobile
          application on such devices strictly in accordance with the terms and
          conditions of this mobile application license contained in these Terms
          and Conditions.
          <br />
          You shall not:
          <br />
          <ul className="my-4 ml-6 list-disc">
            <li>
              Decompile, reverse engineer, disassemble, attempt to derive the
              source code of, or decrypt the application;{" "}
            </li>

            <li>
              Make any modification, adaptation, improvement, enhancement,
              translation, or derivative work from the application;{" "}
            </li>

            <li>
              Violate any applicable laws, rules, or regulations in connection
              with your access or use of the application;{" "}
            </li>

            <li>
              Remove, alter, or obscure any proprietary notice (including any
              notice of copyright or trademark) posted by us or the licensors of
              the application;{" "}
            </li>

            <li>
              Use the application for any revenue generating endeavor,
              commercial enterprise, or other purpose for which it is not
              designed or intended;{" "}
            </li>

            <li>
              Make the application available over a network or other environment
              permitting access or use by multiple devices or users at the same
              time;{" "}
            </li>

            <li>
              Use the application for creating a product, service, or software
              that is, directly or indirectly, competitive with or in any way a
              substitute for the application;{" "}
            </li>

            <li>
              Use the application to send automated queries to any website or to
              send any unsolicited commercial e-mail;{" "}
            </li>

            <li>
              Use any proprietary information or any of our interfaces or our
              other intellectual property in the design, development,
              manufacture, licensing, or distribution of any applications,
              accessories, or devices for use with the application.{" "}
            </li>
          </ul>
          Apple and Android Devices The following terms apply when you use a
          mobile application obtained from either the Apple Store or Google Play
          (each an “App Distributor”) to access the Site:
          <br />
          <ul className="my-4 ml-6 list-disc">
            <li>
              The license granted to you for our mobile application is limited
              to a non-transferable license to use the application on a device
              that utilizes the Apple iOS or Android operating systems, as
              applicable, and in accordance with the usage rules set forth in
              the applicable App Distributor’s terms of service;{" "}
            </li>

            <li>
              We are responsible for providing any maintenance and support
              services with respect to the mobile application as specified in
              the terms and conditions of this mobile application license
              contained in these Terms and Conditions or as otherwise required
              under applicable law, and you acknowledge that each App
              Distributor has no obligation whatsoever to furnish any
              maintenance and support services with respect to the mobile
              application;{" "}
            </li>

            <li>
              In the event of any failure of the mobile application to conform
              to any applicable warranty, you may notify the applicable App
              Distributor, and the App Distributor, in accordance with its terms
              and policies, may refund the purchase price, if any, paid for the
              mobile application, and to the maximum extent permitted by
              applicable law, the App Distributor will have no other warranty
              obligation whatsoever with respect to the mobile application;{" "}
            </li>

            <li>
              You represent and warrant that (i) you are not located in a
              country that is subject to a U.S. government embargo, or that has
              been designated by the U.S. government as a “terrorist supporting”
              country and (ii) you are not listed on any U.S. government list of
              prohibited or restricted parties;{" "}
            </li>

            <li>
              You must comply with applicable third-party terms of agreement
              when using the mobile application, e.g., if you have a VoIP
              application, then you must not be in violation of their wireless
              data service agreement when using the mobile application;{" "}
            </li>

            <li>
              You acknowledge and agree that the App Distributors are
              third-party beneficiaries of the terms and conditions in this
              mobile application license contained in these Terms and
              Conditions, and that each App Distributor will have the right (and
              will be deemed to have accepted the right) to enforce the terms
              and conditions in this mobile application license contained in
              these Terms and Conditions against you as a third-party
              beneficiary thereof.{" "}
            </li>
          </ul>
          <br />
          <h4 className=" mt-5 text-2xl font-bold tracking-tight text-black">
            SOCIAL MEDIA
          </h4>
          <br />
          As part of the functionality of the Site, you may link your account
          with online accounts you have with third-party service providers (each
          such account, a “Third-Party Account”) by either: (1) providing your
          Third-Party Account login information through the Site; or (2)
          allowing us to access your Third-Party Account, as is permitted under
          the applicable terms and conditions that govern your use of each
          Third-Party Account. You represent and warrant that you are entitled
          to disclose your Third-Party Account login information to us and/or
          grant us access to your Third-Party Account, without breach by you of
          any of the terms and conditions that govern your use of the applicable
          Third-Party Account, and without obligating us to pay any fees or
          making us subject to any usage limitations imposed by the third-party
          service provider of the Third-Party Account.
          <br />
          By granting us access to any Third-Party Accounts, you understand that
          (1) we may access, make available, and store (if applicable) any
          content that you have provided to and stored in your Third-Party
          Account (the “Social Network Content”) so that it is available on and
          through the Site via your account, including without limitation any
          friend lists and (2) we may submit to and receive from your
          Third-Party Account additional information to the extent you are
          notified when you link your account with the Third-Party Account.
          <br />
          Depending on the Third-Party Accounts you choose and subject to the
          privacy settings that you have set in such Third-Party Accounts,
          personally identifiable information that you post to your Third-Party
          Accounts may be available on and through your account on the Site.
          <br />
          Please note that if a Third-Party Account or associated service
          becomes unavailable or our access to such Third-Party Account is
          terminated by the third-party service provider, then Social Network
          Content may no longer be available on and through the Site. You will
          have the ability to disable the connection between your account on the
          Site and your Third-Party Accounts at any time.
          <br />
          PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE
          PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY
          BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make
          no effort to review any Social Network Content for any purpose,
          including but not limited to, for accuracy, legality, or
          non-infringement, and we are not responsible for any Social Network
          Content.
          <br />
          You acknowledge and agree that we may access your email address book
          associated with a Third-Party Account and your contacts list stored on
          your mobile device or tablet computer solely for purposes of
          identifying and informing you of those contacts who have also
          registered to use the Site.
          <br />
          You can deactivate the connection between the Site and your
          Third-Party Account by contacting us using the contact information
          below or through your account settings (if applicable). We will
          attempt to delete any information stored on our servers that was
          obtained through such Third-Party Account, except the username and
          profile picture that become associated with your account.
          <br />
          <br />
          <h4 className=" mt-5 text-2xl font-bold tracking-tight text-black">
            SUBMISSIONS
          </h4>
          <br />
          You acknowledge and agree that any questions, comments, suggestions,
          ideas, feedback, or other information regarding the Site
          ("Submissions") provided by you to us are non-confidential and shall
          become our sole property. We shall own exclusive rights, including all
          intellectual property rights, and shall be entitled to the
          unrestricted use and dissemination of these Submissions for any lawful
          purpose, commercial or otherwise, without acknowledgment or
          compensation to you.
          <br />
          You hereby waive all moral rights to any such Submissions, and you
          hereby warrant that any such Submissions are original with you or that
          you have the right to submit such Submissions. You agree there shall
          be no recourse against us for any alleged or actual infringement or
          misappropriation of any proprietary right in your Submissions.
          <br />
          <br />
          <h4 className=" mt-5 text-2xl font-bold tracking-tight text-black">
            THIRD-PARTY WEBSITES AND CONTENT
          </h4>
          <br />
          The Site may contain (or you may be sent via the Site) links to other
          websites ("Third-Party Websites") as well as articles, photographs,
          text, graphics, pictures, designs, music, sound, video, information,
          applications, software, and other content or items belonging to or
          originating from third parties ("Third-Party Content").
          <br />
          Such Third-Party Websites and Third-Party Content are not
          investigated, monitored, or checked for accuracy, appropriateness, or
          completeness by us, and we are not responsible for any Third-Party
          Websites accessed through the Site or any Third-Party Content posted
          on, available through, or installed from the Site, including the
          content, accuracy, offensiveness, opinions, reliability, privacy
          practices, or other policies of or contained in the Third-Party
          Websites or the Third-Party Content.
          <br />
          Inclusion of, linking to, or permitting the use or installation of any
          Third-Party Websites or any Third-Party Content does not imply
          approval or endorsement thereof by us. If you decide to leave the Site
          and access the Third-Party Websites or to use or install any
          Third-Party Content, you do so at your own risk, and you should be
          aware these Terms and Conditions no longer govern.
          <br />
          You should review the applicable terms and policies, including privacy
          and data gathering practices, of any website to which you navigate
          from the Site or relating to any applications you use or install from
          the Site. Any purchases you make through Third-Party Websites will be
          through other websites and from other companies, and we take no
          responsibility whatsoever in relation to such purchases which are
          exclusively between you and the applicable third party.
          <br />
          You agree and acknowledge that we do not endorse the products or
          services offered on Third-Party Websites and you shall hold us
          harmless from any harm caused by your purchase of such products or
          services. Additionally, you shall hold us harmless from any losses
          sustained by you or harm caused to you relating to or resulting in any
          way from any Third-Party Content or any contact with Third-Party
          Websites.
          <br />
          <br />
          <h4 className=" mt-5 text-2xl font-bold tracking-tight text-black">
            ADVERTISERS
          </h4>
          <br />
          We allow advertisers to display their advertisements and other
          information in certain areas of the Site, such as sidebar
          advertisements or banner advertisements. If you are an advertiser, you
          shall take full responsibility for any advertisements you place on the
          Site and any services provided on the Site or products sold through
          those advertisements.
          <br />
          Further, as an advertiser, you warrant and represent that you possess
          all rights and authority to place advertisements on the Site,
          including, but not limited to, intellectual property rights, publicity
          rights, and contractual rights.
          <br />
          [As an advertiser, you agree that such advertisements are subject to
          our Digital Millennium Copyright Act (“DMCA”) Notice and Policy
          provisions as described below, and you understand and agree there will
          be no refund or other compensation for DMCA takedown-related issues.]
          We simply provide the space to place such advertisements, and we have
          no other relationship with advertisers.
          <br />
          <br />
          <h4 className="mt-5 text-2xl font-bold tracking-tight text-black">
            SITE MANAGEMENT
          </h4>
          <br />
          We reserve the right, but not the obligation, to:
          <ul className="my-4 ml-6 list-disc">
            <li>
              Mmonitor the Site for violations of these Terms and Conditions;{" "}
            </li>

            <li>
              Take appropriate legal action against anyone who, in our sole
              discretion, violates the law or these Terms and Conditions,
              including without limitation, reporting such user to law
              enforcement authorities;{" "}
            </li>

            <li>
              In our sole discretion and without limitation, refuse, restrict
              access to, limit the availability of, or disable (to the extent
              technologically feasible) any of your Contributions or any portion
              thereof;{" "}
            </li>

            <li>
              In our sole discretion and without limitation, notice, or
              liability, to remove from the Site or otherwise disable all files
              and content that are excessive in size or are in any way
              burdensome to our systems;{" "}
            </li>

            <li>
              Otherwise manage the Site in a manner designed to protect our
              rights and property and to facilitate the proper functioning of
              the Site.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default TermsAndCondition;
