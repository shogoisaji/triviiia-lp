"use client";

import { useState } from "react";

// Define the type for a section's content (adjusted for terms)
type SectionContent = {
  title: string;
  content?: string;
  list?: string[];
  additionalContent?: string;
  link?: string; // Added for potential links like Privacy Policy
  linkText?: string; // Added for link text
};

// Define the type for the main content structure (jp and en)
type LanguageContent = {
  title: string;
  intro: string;
  sections: SectionContent[];
  footer?: {
    // Make footer optional and structured
    established?: string;
    revised?: string;
    contact?: string;
  };
  finalNote?: string; // Add final note separately if needed
};

const TermsOfUse = () => {
  const [language, setLanguage] = useState<"jp" | "en">("jp");

  // Explicitly type the content object
  const content: { jp: LanguageContent; en: LanguageContent } = {
    jp: {
      title: "利用規約",
      intro:
        "本利用規約（以下「本規約」といいます）は、Triviiia（以下「当アプリ」または「当社」といいます）の使用に関する条件を定めるものです。当アプリをダウンロード、インストール、または使用することにより、ユーザーは本規約に同意したものとみなされます。\n\n本規約に同意されない場合は、当アプリをダウンロード、インストール、または使用することはできません。",
      sections: [
        {
          title: "サービスの説明",
          content:
            "当アプリは、「Discover Fun Facts Every Day（毎日楽しい豆知識を発見する）」をコンセプトとしたトリビアアプリです。当アプリは、ユーザーに様々な分野の興味深い事実や知識を提供することを目的としています。",
        },
        {
          title: "利用条件",
          content: "", // Placeholder, sub-sections handled below if needed, or merge content
          list: [
            // Combined Age Limit and Account info here or use sub-sections if structure demands
            "年齢制限: 当アプリを使用するには、13歳以上である必要があります。13歳未満のユーザーは、保護者または法定後見人の同意と監督の下でのみ当アプリを使用することができます。",
            "アカウント: 当アプリの一部の機能を利用するために、将来的にアカウント登録が必要となる場合があります。アカウントを作成する場合、ユーザーは以下の責任を負います：\n  1. 正確かつ完全な情報を提供すること\n  2. アカウント情報の機密性を維持すること\n  3. アカウントを通じて行われるすべての活動に責任を持つこと\n当社は、ユーザーのアカウントのセキュリティ侵害や不正使用について責任を負いません。セキュリティ侵害が発生した場合は、直ちに当社に通知してください。",
          ],
        },
        {
          title: "知的財産権",
          content: "", // Placeholder for potential subsections or combined text
          list: [
            // Combined Rights and User Content info
            "当社の権利: 当アプリ、そのコンテンツ、機能、デザインを含むすべての知的財産権は、当社または当社のライセンサーに帰属します。これには、テキスト、グラフィック、ロゴ、アイコン、画像、音声クリップ、ビデオクリップ、データ編集物、ソフトウェアが含まれますが、これらに限定されません。\n当アプリは個人的、非商業的な使用のためにのみライセンスされており、販売されるものではありません。本規約に明示的に許可されている場合を除き、当アプリのいかなる部分も複製、修正、配布、表示、実行、再公開、ダウンロード、投稿、送信することはできません。",
            "ユーザーコンテンツ: 将来的に当アプリでユーザーがコンテンツを投稿、アップロード、共有できる機能が追加された場合、ユーザーは当該コンテンツに関する所有権を保持しますが、当社に対して、当該コンテンツを使用、複製、修正、適応、公開、翻訳、派生物を作成、配布、実行、表示する世界的、非独占的、無償、サブライセンス可能、譲渡可能なライセンスを付与するものとします。",
          ],
        },
        {
          title: "禁止事項",
          content:
            "ユーザーは、当アプリの使用において以下の行為を行わないことに同意します：",
          list: [
            "違法、有害、脅迫的、虐待的、嫌がらせ、不法行為、中傷的、俗悪、わいせつ、プライバシーを侵害する、憎悪を煽る、または人種的・民族的に不快な方法で当アプリを使用すること",
            "当アプリのセキュリティ機能を回避、無効化、干渉、または妨害すること",
            "リバースエンジニアリング、逆コンパイル、逆アセンブル、またはその他の方法で当アプリのソースコードを抽出しようとすること",
            "当アプリの正常な運営を妨害または中断させること",
            "当アプリを通じて未承諾の広告、宣伝物、スパム、チェーンレター、またはその他の勧誘を配布すること",
            "他のユーザーになりすますこと",
            "当アプリを使用して、コンピュータウイルス、トロイの木馬、ワーム、ロジックボム、またはその他の悪意のあるまたは技術的に有害な素材を故意に導入すること",
          ],
        },
        {
          title: "広告",
          content:
            "当アプリはGoogle AdMobを使用して広告を表示しています。広告の表示方法や広告によって収集される情報については、当社のプライバシーポリシーおよびGoogle AdMobのプライバシーポリシーをご参照ください。",
          link: "/privacy", // Internal link to privacy policy
          linkText: "プライバシーポリシー",
          additionalContent:
            "[Google AdMobのプライバシーポリシー](https://policies.google.com/privacy)", // Markdown link for external
        },
        // { // Section Removed: 課金と支払い（将来的な機能）
        //   title: "課金と支払い（将来的な機能）",
        //   content: "将来的に当アプリで課金機能を導入する場合、以下の条件が適用されます：...",
        // },
        {
          title: "免責事項",
          content: "", // Placeholder
          list: [
            // Combined Disclaimer subsections
            "サービスの提供: 当アプリは「現状有姿」および「提供可能な限り」で提供されます。当社は、当アプリが中断されないこと、タイムリーであること、安全であること、エラーがないこと、または当アプリを通じて得られる結果が正確で信頼できるものであることを保証しません。",
            "コンテンツの正確性: 当アプリを通じて提供されるコンテンツは、情報提供のみを目的としています。当社は、当アプリに含まれる情報の完全性、信頼性、正確性、または利用可能性について保証しません。",
          ],
        },
        {
          title: "責任の制限",
          content:
            "適用法で許可される最大限の範囲において、当社、その役員、取締役、従業員、代理人は、契約、不法行為（過失を含む）、またはその他の法的理論に基づくかどうかにかかわらず、以下に起因または関連して生じる直接的、間接的、偶発的、結果的、特別、または懲罰的損害について責任を負いません：\n1. 当アプリの使用または使用不能\n2. 当アプリを通じてアクセスされたコンテンツまたは情報\n3. 当アプリの使用から生じる第三者との取引\n\n一部の法域では、黙示的保証の除外または責任の制限を認めていないため、上記の除外または制限の一部はユーザーに適用されない場合があります。",
        },
        {
          title: "補償",
          content:
            "ユーザーは、以下に起因または関連して生じるすべての請求、損害、義務、損失、責任、費用、または債務、および費用（合理的な弁護士費用を含む）から、当社、その役員、取締役、従業員、代理人を防御し、補償し、無害に保つことに同意します：\n1. ユーザーによる本規約の違反\n2. ユーザーによる当アプリの使用\n3. ユーザーによる適用法または第三者の権利の違反",
        },
        {
          title: "第三者のリンクとコンテンツ",
          content:
            "当アプリには、第三者のウェブサイト、サービス、またはコンテンツへのリンクが含まれる場合があります。当社は、これらの第三者のウェブサイト、サービス、またはコンテンツの内容、プライバシーポリシー、または慣行について責任を負わず、これらに関連するいかなる損害または損失についても責任を負いません。",
        },
        {
          title: "規約の変更",
          content:
            "当社は、法的要件の変更や当社のプラクティスの変更を反映するために、本規約を随時更新することがあります。重要な変更がある場合は、アプリ内通知または当社のウェブサイトでの告知など、適切な方法でユーザーに通知します。\n\n変更後も当アプリを継続して使用することにより、ユーザーは更新された規約に同意したものとみなされます。",
        },
        {
          title: "準拠法と管轄",
          content:
            "本規約は、日本の法律に準拠し、解釈されるものとします。本規約に関連するすべての紛争は、日本の裁判所の専属管轄に服するものとします。", // Updated country
        },
        {
          title: "分離可能性",
          content:
            "本規約のいずれかの条項が無効、違法、または執行不能と判断された場合、当該条項は本規約から分離され、残りの条項の有効性および執行可能性には影響しないものとします。",
        },
        {
          title: "完全合意",
          content:
            "本規約は、当アプリの使用に関するユーザーと当社との間の完全な合意を構成し、当アプリに関する以前のすべての合意、表明、保証に優先します。",
        },
        {
          title: "お問い合わせ",
          content:
            "本規約に関するご質問やご意見については、以下の連絡先までお問い合わせください：\nメールアドレス: isajiappdev@gmail.com", // Updated contact
        },
      ],
      footer: {
        // Added structured footer
        revised: "最終更新日: 2025年4月4日",
      },
      finalNote:
        "本利用規約をお読みいただき、ありがとうございます。当アプリをお楽しみください。", // Added final note
    },
    en: {
      // English content based on Japanese version
      title: "Terms of Use",
      intro:
        "These Terms of Use (hereinafter referred to as 'these Terms') set forth the conditions regarding the use of Triviiia (hereinafter referred to as 'this App' or 'we'). By downloading, installing, or using this App, you are deemed to have agreed to these Terms.\n\nIf you do not agree to these Terms, you may not download, install, or use this App.",
      sections: [
        {
          title: "Description of Service",
          content:
            "This App is a trivia application based on the concept of 'Discover Fun Facts Every Day'. This App aims to provide users with interesting facts and knowledge in various fields.",
        },
        {
          title: "Terms of Use",
          content: "",
          list: [
            "Age Restriction: You must be at least 13 years old to use this App. Users under the age of 13 may only use this App with the consent and supervision of a parent or legal guardian.",
            "Account: Account registration may be required in the future to use some features of this App. If you create an account, you are responsible for:\n  1. Providing accurate and complete information\n  2. Maintaining the confidentiality of your account information\n  3. All activities that occur through your account\nWe are not responsible for any security breaches or unauthorized use of your account. If a security breach occurs, please notify us immediately.",
          ],
        },
        {
          title: "Intellectual Property Rights",
          content: "",
          list: [
            "Our Rights: All intellectual property rights, including the App, its content, features, and design, belong to us or our licensors. This includes, but is not limited to, text, graphics, logos, icons, images, audio clips, video clips, data compilations, and software.\nThis App is licensed for personal, non-commercial use only and is not sold. Except as expressly permitted in these Terms, no part of this App may be reproduced, modified, distributed, displayed, performed, republished, downloaded, posted, or transmitted.",
            "User Content: If features allowing users to post, upload, or share content are added in the future, users retain ownership of such content but grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such content.",
          ],
        },
        {
          title: "Prohibited Actions",
          content:
            "You agree not to engage in the following actions when using this App:",
          list: [
            "Using the App in any way that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, invasive of privacy, hateful, or racially or ethnically offensive.",
            "Circumventing, disabling, interfering with, or disrupting the security features of the App.",
            "Attempting to reverse engineer, decompile, disassemble, or otherwise extract the source code of the App.",
            "Interfering with or disrupting the normal operation of the App.",
            "Distributing unsolicited advertising, promotional materials, spam, chain letters, or other solicitations through the App.",
            "Impersonating any other user.",
            "Knowingly introducing computer viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful using the App.",
          ],
        },
        {
          title: "Advertisements",
          content:
            "This App uses Google AdMob to display advertisements. For information on how ads are displayed and the information collected by ads, please refer to our Privacy Policy and the Google AdMob Privacy Policy.",
          link: "/privacy", // Internal link
          linkText: "Privacy Policy",
          additionalContent:
            "[Google AdMob Privacy Policy](https://policies.google.com/privacy)", // Markdown link
        },
        // { // Section Removed: Billing and Payment (Future Feature)
        //   title: "Billing and Payment (Future Feature)",
        //   content: "If billing features are introduced in the future, the following conditions will apply: ...",
        // },
        {
          title: "Disclaimer",
          content: "",
          list: [
            "Service Provision: This App is provided 'as is' and 'as available'. We do not warrant that the App will be uninterrupted, timely, secure, error-free, or that the results obtained through the App will be accurate or reliable.",
            "Content Accuracy: The content provided through this App is for informational purposes only. We do not warrant the completeness, reliability, accuracy, or availability of the information contained in the App.",
          ],
        },
        {
          title: "Limitation of Liability",
          content:
            "To the maximum extent permitted by applicable law, we, our officers, directors, employees, and agents shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or related to:\n1. The use or inability to use the App\n2. Content or information accessed through the App\n3. Transactions with third parties arising from the use of the App\nWhether based on contract, tort (including negligence), or any other legal theory.\n\nSome jurisdictions do not allow the exclusion of implied warranties or limitation of liability, so some of the above exclusions or limitations may not apply to you.",
        },
        {
          title: "Indemnification",
          content:
            "You agree to defend, indemnify, and hold harmless us, our officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to reasonable attorney's fees) arising from or related to:\n1. Your violation of these Terms\n2. Your use of the App\n3. Your violation of any applicable law or the rights of a third party",
        },
        {
          title: "Third-Party Links and Content",
          content:
            "This App may contain links to third-party websites, services, or content. We are not responsible for the content, privacy policies, or practices of these third-party websites, services, or content, and shall not be liable for any damage or loss related thereto.",
        },
        {
          title: "Changes to Terms",
          content:
            "We may update these Terms from time to time to reflect changes in legal requirements or our practices. If there are significant changes, we will notify users through appropriate means, such as in-app notifications or announcements on our website.\n\nBy continuing to use this App after changes have been made, you are deemed to have agreed to the updated Terms.",
        },
        {
          title: "Governing Law and Jurisdiction",
          content:
            "These Terms shall be governed by and construed in accordance with the laws of Japan. All disputes related to these Terms shall be subject to the exclusive jurisdiction of the courts of Japan.", // Updated country
        },
        {
          title: "Severability",
          content:
            "If any provision of these Terms is held to be invalid, illegal, or unenforceable, such provision shall be severed from these Terms, and the validity and enforceability of the remaining provisions shall not be affected.",
        },
        {
          title: "Entire Agreement",
          content:
            "These Terms constitute the entire agreement between you and us regarding the use of the App and supersede all prior agreements, representations, and warranties regarding the App.",
        },
        {
          title: "Contact Us",
          content:
            "For questions or comments regarding these Terms, please contact us at:\nEmail: isajiappdev@gmail.com", // Updated contact
        },
      ],
      footer: {
        // Added structured footer
        revised: "Last Updated: April 4, 2025",
      },
      finalNote: "Thank you for reading these Terms of Use. Enjoy the App!", // Added final note
    },
  };

  const currentContent = content[language];

  // Reusing renderSectionContent from privacy policy might require adjustments
  // For simplicity, define a specific one or adapt the existing one if compatible
  const renderTermSectionContent = (section: SectionContent) => (
    <>
      {section.content && (
        <p className="mb-4 whitespace-pre-line">{section.content}</p>
      )}
      {section.list && (
        <ul className="list-disc list-inside mb-4 space-y-2">
          {" "}
          {/* Adjusted spacing */}
          {section.list.map((item: string, itemIndex: number) => (
            <li key={itemIndex} className="whitespace-pre-line">
              {item}
            </li> // Keep formatting
          ))}
        </ul>
      )}
      {/* Use standard <a> tag for internal links */}
      {section.link && section.linkText && section.link.startsWith("/") && (
        <a
          href={section.link}
          className="text-blue-500 hover:underline mb-4 block"
        >
          {section.linkText}
        </a>
      )}
      {/* Handle external links (assuming markdown format in additionalContent) */}
      {section.additionalContent &&
        section.additionalContent.includes("](") && (
          <p className="mb-4">
            <a
              href={section.additionalContent.substring(
                section.additionalContent.indexOf("(") + 1,
                section.additionalContent.indexOf(")")
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {section.additionalContent.substring(
                section.additionalContent.indexOf("[") + 1,
                section.additionalContent.indexOf("]")
              )}
            </a>
          </p>
        )}
    </>
  );

  return (
    // Use similar structure as Privacy Policy for consistency
    <div className="bg-custom-dark text-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto p-6 sm:p-8 md:p-10">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setLanguage("jp")}
            className={`${
              language === "jp"
                ? "bg-emerald-500 text-white ring-2 ring-emerald-300"
                : "bg-gray-600 text-gray-300 hover:bg-gray-500"
            } font-semibold py-2 px-4 rounded-l transition-colors duration-200`}
          >
            日本語
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`${
              language === "en"
                ? "bg-emerald-500 text-white ring-2 ring-emerald-300"
                : "bg-gray-600 text-gray-300 hover:bg-gray-500"
            } font-semibold py-2 px-4 rounded-r transition-colors duration-200`}
          >
            English
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-emerald-400">
          {currentContent.title}
        </h1>
        <p className="mb-8 text-lg leading-relaxed whitespace-pre-line">
          {currentContent.intro}
        </p>

        {currentContent.sections.map((section, index) => (
          <div key={index} className="mb-8 p-4 bg-gray-800 rounded-lg shadow">
            <h2 className="text-2xl sm:text-3xl font-semibold mt-4 mb-4 text-emerald-300">
              {section.title}
            </h2>
            {/* Render section content using the specific function */}
            {renderTermSectionContent(section)}
          </div>
        ))}

        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400 space-y-2">
          {/* Display footer content */}
          {currentContent.footer?.revised && (
            <p>{currentContent.footer.revised}</p>
          )}
          {/* Display final note */}
          {currentContent.finalNote && (
            <p className="mt-4 italic">{currentContent.finalNote}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
