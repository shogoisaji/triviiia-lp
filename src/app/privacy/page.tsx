"use client";

import { useState } from "react";

// Define the type for a section's content
type SectionContent = {
  title: string;
  content?: string; // Make content optional as some sections might only have subsections
  list?: string[];
  additionalContent?: string;
  link?: string;
  linkText?: string;
  subSections?: SectionContent[]; // Allow for nested subsections
};

// Define the type for the main content structure (jp and en)
type LanguageContent = {
  title: string;
  intro: string;
  sections: SectionContent[];
  footer: {
    established: string;
    revised?: string;
    contact?: string;
  };
};

const PrivacyPolicy = () => {
  const [language, setLanguage] = useState<"jp" | "en">("jp");

  // Explicitly type the content object
  const content: { jp: LanguageContent; en: LanguageContent } = {
    jp: {
      title: "プライバシーポリシー",
      intro:
        "本プライバシーポリシーは、Triviiia（以下「当アプリ」または「当社」といいます）が、ユーザーの情報をどのように収集、使用、保護、共有するかについて説明するものです。当アプリをダウンロード、インストール、または使用することにより、ユーザーは本プライバシーポリシーに記載された情報の収集、使用、保護、共有に同意したものとみなされます。\n\n当アプリは、ユーザーに「Discover Fun Facts Every Day（毎日楽しい豆知識を発見する）」体験を提供することを目的としています。このサービスを提供するにあたり、当社はユーザーのプライバシーを尊重し、適用されるすべてのプライバシー法を遵守することをお約束します。",
      sections: [
        {
          title: "収集する情報",
          content: "当アプリは、以下のカテゴリの情報を収集することがあります：",
          subSections: [
            {
              title: "自動的に収集される情報",
              content:
                "当アプリは、以下の情報を自動的に収集することがあります：",
              list: [
                "デバイス情報：デバイスの種類、モデル、オペレーティングシステム、デバイス識別子（デバイスID）、IPアドレス、モバイルネットワーク情報",
                "使用状況データ：アプリの機能の使用状況、アプリ内での行動パターン、アプリの起動時間、使用時間、クラッシュデータ、広告との相互作用データ",
                "位置情報：おおよその位置情報（国、地域、都市レベル）",
              ],
            },
            {
              title: "ユーザーが提供する情報",
              content:
                "当アプリでは、将来的に以下の情報を収集する可能性があります：",
              list: [
                "アカウント情報：ユーザー名、メールアドレス、パスワード",
                "支払い情報：クレジットカード情報、請求先住所、その他の支払い関連情報",
              ],
            },
          ],
        },
        {
          title: "情報の使用目的",
          content: "当社は、収集した情報を以下の目的で使用します：",
          list: [
            "アプリの提供と改善：アプリの機能提供と維持、ユーザー体験の向上、アプリのパフォーマンス分析と改善、技術的問題の診断と解決",
            "パーソナライズされたコンテンツの提供：ユーザーの興味や好みに基づいたコンテンツの提供、ユーザー体験のカスタマイズ",
            "広告配信：関連性の高い広告の表示、広告効果の測定、広告主とのデータ共有",
            "コミュニケーション：サービスに関する重要な通知の送信、アップデートや新機能の案内、サポートの提供",
          ],
        },
        {
          title: "情報の共有",
          content:
            "当社は、以下の場合にユーザー情報を第三者と共有することがあります：",
          list: [
            "サービスプロバイダー：アプリの機能提供を支援する第三者サービスプロバイダー、データ分析、広告配信、支払い処理などのサービスを提供する企業",
            "広告パートナー：Google AdMobなどの広告ネットワーク、広告効果測定サービス",
            "法的要件：法律、規制、法的手続き、政府の要請に応じる場合、当社の権利、財産、安全を保護する必要がある場合、不正行為、セキュリティ上の脅威、技術的問題の検出、防止、対処を行う場合",
            "事業譲渡：合併、買収、資産売却の一部として情報が譲渡される場合",
          ],
        },
        {
          title: "App Tracking Transparency（ATT）",
          content:
            "当アプリはiOSデバイスでApp Tracking Transparency（ATT）フレームワークを使用しています。これにより、アプリがデバイスの広告識別子（IDFA）にアクセスする前に、ユーザーの許可を求めます。\n\nユーザーがトラッキングを許可すると、当社は以下の目的でIDFAを使用することがあります：\n- パーソナライズされた広告の提供\n- 広告キャンペーンの効果測定\n- アプリ使用状況の分析\n\nユーザーはいつでもデバイスの設定から許可を変更できます：\n1. 「設定」アプリを開く\n2. 「プライバシー」をタップ\n3. 「トラッキング」をタップ\n4. 「Triviiia」のトグルをオン/オフにする",
        },
        {
          title: "Google AdMob",
          content:
            "当アプリはGoogle AdMobを使用して広告を表示しています。AdMobは以下の情報を収集することがあります：",
          list: [
            "広告識別子：デバイスの広告ID（iOS: IDFA）",
            "デバイス情報：デバイスの種類、モデル、オペレーティングシステム、画面サイズ、言語設定",
            "位置情報：おおよその位置情報（IPアドレスに基づく）",
            "使用状況データ：アプリ内での行動、広告との相互作用、広告表示回数、クリック数",
            "診断情報：クラッシュデータ、パフォーマンスデータ",
          ],
          additionalContent: "Google AdMobのプライバシーポリシー",
          link: "https://policies.google.com/privacy",
        },
        {
          title: "データセキュリティ",
          content:
            "当社は、ユーザー情報の安全を保護するために適切な技術的、組織的措置を講じています。ただし、インターネットやデータストレージシステムは100%安全ではないため、情報の完全な安全性を保証することはできません。\n\n当社は以下の対策を実施しています：\n- データの暗号化\n- アクセス制限と認証手続き\n- セキュリティシステムの定期的な更新と監視",
        },
        {
          title: "ユーザーの権利と選択肢",
          content: "ユーザーには以下の権利があります：",
          list: [
            "情報へのアクセス：当社が保持するユーザーの個人情報へのアクセスを要求する権利",
            "情報の修正：不正確または不完全な情報の修正を要求する権利",
            "情報の削除：特定の条件下で個人情報の削除を要求する権利",
            "処理の制限：特定の条件下で個人情報の処理を制限する権利",
            "同意の撤回：いつでも同意を撤回する権利",
            "データポータビリティ：特定の条件下で、構造化された形式でデータを受け取り、他の管理者に転送する権利",
          ],
          additionalContent:
            "これらの権利を行使するには、下記の「お問い合わせ」セクションに記載された連絡先までご連絡ください。",
        },
        {
          title: "広告設定の管理",
          content: "ユーザーは以下の方法で広告設定を管理できます：",
          list: [
            "デバイス設定：iOSデバイスの「設定」>「プライバシー」>「トラッキング」から広告トラッキングを制限できます。iOSデバイスの「設定」>「プライバシー」>「広告」から「広告のパーソナライズ」をオフにできます。",
            "広告ネットワーク設定：Google広告設定からGoogle広告のパーソナライズを管理できます。",
          ],
          link: "https://adssettings.google.com/",
          additionalContent: "Google広告設定",
        },
        {
          title: "子供のプライバシー",
          content:
            "当アプリは13歳未満の子供を対象としていません。当社は、13歳未満の子供から意図的に個人情報を収集することはありません。13歳未満の子供が個人情報を提供したことが判明した場合、当社はできるだけ速やかにその情報を削除します。\n\n13歳未満のお子様の情報が当社に提供されたと思われる場合は、下記の「お問い合わせ」セクションに記載された連絡先までご連絡ください。",
        },
        {
          title: "国際データ転送",
          content:
            "当社は世界中のユーザーにサービスを提供しているため、ユーザーの情報が異なる国や地域に転送、処理、保存される場合があります。これらの国や地域のデータ保護法は、ユーザーの居住国のものとは異なる場合があります。\n\n当社は、国際データ転送に関する適用法を遵守し、ユーザーの情報を保護するための適切な措置を講じます。",
        },
        {
          title: "プライバシーポリシーの変更",
          content:
            "当社は、法的要件の変更や当社のプラクティスの変更を反映するために、本プライバシーポリシーを随時更新することがあります。重要な変更がある場合は、アプリ内通知または当社のウェブサイトでの告知など、適切な方法でユーザーに通知します。\n\n変更後も当アプリを継続して使用することにより、ユーザーは更新されたプライバシーポリシーに同意したものとみなされます。",
        },
        {
          title: "お問い合わせ",
          content:
            "本プライバシーポリシーに関するご質問、ご意見、またはユーザーの権利行使のご要望については、以下の連絡先までお問い合わせください：\nメールアドレス: isajiappdev@gmail.com",
        },
        {
          title: "準拠法",
          content:
            "本プライバシーポリシーは、日本の法律に準拠し、解釈されるものとします。",
        },
      ],
      footer: {
        established: "制定日：2024年12月30日",
        revised: "改訂日：2025年4月4日",
        contact: "お問い合わせ先：isajiappdev@gmail.com",
      },
    },
    en: {
      title: "Privacy Policy",
      intro:
        "This Privacy Policy explains how Triviiia (referred to as 'this app' or 'we') collects, uses, protects, and shares user information. By downloading, installing, or using this app, users are deemed to have agreed to the collection, use, protection, and sharing of information described in this Privacy Policy.\n\nThis app aims to provide users with the 'Discover Fun Facts Every Day' experience. In providing this service, we respect user privacy and commit to complying with all applicable privacy laws.",
      sections: [
        {
          title: "Information We Collect",
          content:
            "This app may collect the following categories of information:",
          subSections: [
            {
              title: "Information Collected Automatically",
              content:
                "This app may automatically collect the following information:",
              list: [
                "Device Information: Device type, model, operating system, device identifiers (Device ID), IP address, mobile network information.",
                "Usage Data: Usage of app features, in-app behavior patterns, app launch times, usage duration, crash data, interaction data with advertisements.",
                "Location Information: Approximate location information (country, region, city level).",
              ],
            },
            {
              title: "Information Provided by Users",
              content:
                "This app may collect the following information in the future:",
              list: [
                "Account Information: Username, email address, password.",
                "Payment Information: Credit card information, billing address, other payment-related information.",
              ],
            },
          ],
        },
        {
          title: "How We Use Information",
          content:
            "We use the collected information for the following purposes:",
          list: [
            "Providing and Improving the App: Providing and maintaining app features, improving user experience, analyzing and improving app performance, diagnosing and resolving technical issues.",
            "Providing Personalized Content: Providing content based on user interests and preferences, customizing user experience.",
            "Advertising Delivery: Displaying relevant advertisements, measuring advertising effectiveness, sharing data with advertisers.",
            "Communication: Sending important notifications regarding the service, announcing updates and new features, providing support.",
          ],
        },
        {
          title: "Information Sharing",
          content:
            "We may share user information with third parties in the following cases:",
          list: [
            "Service Providers: Third-party service providers who assist in providing app features, companies providing services such as data analysis, ad delivery, payment processing.",
            "Advertising Partners: Advertising networks such as Google AdMob, advertising effectiveness measurement services.",
            "Legal Requirements: When required to comply with laws, regulations, legal processes, or governmental requests, when necessary to protect our rights, property, or safety, when detecting, preventing, or addressing fraud, security threats, or technical issues.",
            "Business Transfers: When information is transferred as part of a merger, acquisition, or asset sale.",
          ],
        },
        {
          title: "App Tracking Transparency (ATT)",
          content:
            "This app uses the App Tracking Transparency (ATT) framework on iOS devices. This requires user permission before the app can access the device's advertising identifier (IDFA).\n\nIf the user allows tracking, we may use the IDFA for the following purposes:\n- Providing personalized advertising\n- Measuring the effectiveness of advertising campaigns\n- Analyzing app usage\n\nUsers can change their permission settings at any time in their device settings:\n1. Open the 'Settings' app\n2. Tap 'Privacy'\n3. Tap 'Tracking'\n4. Toggle the switch for 'Triviiia' on/off",
        },
        {
          title: "Google AdMob",
          content:
            "This app uses Google AdMob to display advertisements. AdMob may collect the following information:",
          list: [
            "Advertising Identifiers: Device's advertising ID (iOS: IDFA).",
            "Device Information: Device type, model, operating system, screen size, language settings.",
            "Location Information: Approximate location information (based on IP address).",
            "Usage Data: In-app behavior, interaction with ads, number of ad impressions, clicks.",
            "Diagnostic Information: Crash data, performance data.",
          ],
          additionalContent: "Google AdMob Privacy Policy",
          link: "https://policies.google.com/privacy",
        },
        {
          title: "Data Security",
          content:
            "We take appropriate technical and organizational measures to protect the security of user information. However, as no internet or data storage system is 100% secure, we cannot guarantee the absolute security of information.\n\nWe implement the following measures:\n- Data encryption\n- Access restrictions and authentication procedures\n- Regular updates and monitoring of security systems",
        },
        {
          title: "User Rights and Choices",
          content: "Users have the following rights:",
          list: [
            "Access to Information: The right to request access to the personal information we hold about the user.",
            "Correction of Information: The right to request correction of inaccurate or incomplete information.",
            "Deletion of Information: The right to request deletion of personal information under certain conditions.",
            "Restriction of Processing: The right to request restriction of processing of personal information under certain conditions.",
            "Withdrawal of Consent: The right to withdraw consent at any time.",
            "Data Portability: The right to receive data in a structured format and transfer it to another controller under certain conditions.",
          ],
          additionalContent:
            "To exercise these rights, please contact us using the contact information provided in the 'Contact Us' section below.",
        },
        {
          title: "Managing Ad Settings",
          content: "Users can manage their ad settings in the following ways:",
          list: [
            "Device Settings: You can limit ad tracking via 'Settings' > 'Privacy' > 'Tracking' on your iOS device. You can turn off 'Personalized Ads' via 'Settings' > 'Privacy' > 'Advertising' on your iOS device.",
            "Ad Network Settings: You can manage Google ad personalization from Google Ad Settings.",
          ],
          link: "https://adssettings.google.com/",
          additionalContent: "Google Ad Settings",
        },
        {
          title: "Children's Privacy",
          content:
            "This app is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will delete such information as soon as possible.\n\nIf you believe that information from a child under 13 has been provided to us, please contact us using the contact information provided in the 'Contact Us' section below.",
        },
        {
          title: "International Data Transfers",
          content:
            "As we provide services to users worldwide, user information may be transferred, processed, and stored in different countries or regions. The data protection laws in these countries or regions may differ from those in the user's country of residence.\n\nWe comply with applicable laws regarding international data transfers and take appropriate measures to protect user information.",
        },
        {
          title: "Changes to the Privacy Policy",
          content:
            "We may update this Privacy Policy from time to time to reflect changes in legal requirements or our practices. If there are significant changes, we will notify users through appropriate means, such as in-app notifications or announcements on our website.\n\nBy continuing to use this app after changes have been made, users are deemed to have agreed to the updated Privacy Policy.",
        },
        {
          title: "Contact Us",
          content:
            "For questions, comments, or requests to exercise user rights regarding this Privacy Policy, please contact us at:\nEmail: isajiappdev@gmail.com",
        },
        {
          title: "Governing Law",
          content:
            "This Privacy Policy shall be governed by and construed in accordance with the laws of Japan.",
        },
      ],
      footer: {
        established: "Established: December 30, 2024",
        revised: "Revised: April 4, 2025",
        contact: "Contact: isajiappdev@gmail.com",
      },
    },
  };

  const currentContent = content[language];

  // Use the defined type SectionContent for the section parameter
  const renderSectionContent = (section: SectionContent) => (
    <>
      {/* Optional chaining in case content is undefined */}
      {section.content && (
        <p className="mb-4 whitespace-pre-line">{section.content}</p>
      )}
      {section.list && (
        <ul className="list-disc list-inside mb-4 space-y-1">
          {section.list.map((item: string, itemIndex: number) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      )}
      {section.additionalContent && !section.link && (
        <p className="mb-4 whitespace-pre-line">{section.additionalContent}</p>
      )}
      {section.link && (
        <a
          href={section.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mb-4 block"
        >
          {section.linkText || section.additionalContent}
        </a>
      )}
    </>
  );

  return (
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
            {/* Pass section directly if it doesn't have subSections */}
            {!section.subSections && renderSectionContent(section)}
            {/* Render main content and then map over subSections */}
            {section.subSections && (
              <>
                {section.content && (
                  <p className="mb-4 whitespace-pre-line">{section.content}</p>
                )}
                {section.subSections.map(
                  // Use SectionContent for subSection as well
                  (subSection: SectionContent, subIndex: number) => (
                    <div
                      key={subIndex}
                      className="ml-4 mt-4 pl-4 border-l-2 border-gray-600"
                    >
                      <h3 className="text-xl font-semibold mb-2 text-emerald-200">
                        {subSection.title}
                      </h3>
                      {/* Render content of the subsection */}
                      {renderSectionContent(subSection)}
                    </div>
                  )
                )}
              </>
            )}
          </div>
        ))}

        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400 space-y-2">
          <p>{currentContent.footer.established}</p>
          {currentContent.footer.revised && (
            <p>{currentContent.footer.revised}</p>
          )}
          {currentContent.footer.contact && (
            <p>{currentContent.footer.contact}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
