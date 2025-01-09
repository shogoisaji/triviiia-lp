"use client";

import { useState } from "react";

const PrivacyPolicy = () => {
  const [language, setLanguage] = useState<"jp" | "en">("jp");

  const content = {
    jp: {
      title: "プライバシーポリシー",
      intro:
        "このプライバシーポリシーは、Triviiia（以下、「本サービス」といいます。）が提供するサービスにおける、個人情報の取り扱いについて説明するものです。",
      sections: [
        {
          title: "1. 収集する情報",
          content: "本サービスでは、以下の情報を収集する場合があります。",
          list: [
            "広告ID",
            "デバイス情報（モデル、OSバージョンなど）",
            "アプリの利用状況データ",
            "地域情報（おおよその位置情報）",
          ],
          additionalContent:
            "これらの情報は、Google AdMobを通じて収集される可能性があります。\n\nまた、本サービスでは、広告パーソナライズなどの目的で、ユーザーにトラッキング許可を求める場合があります。トラッキング許可は、iOSの設定からいつでも変更できます。",
        },
        {
          title: "2. データの利用目的",
          content: "収集したデータは、以下の目的で使用されます。",
          list: [
            "広告配信とその最適化",
            "アプリのパフォーマンス向上",
            "ユーザー体験の改善",
          ],
        },
        {
          title: "3. 第三者への提供",
          content:
            "Google AdMobなどの第三者サービスによるデータ取り扱いについては、各サービスのプライバシーポリシーをご確認ください。",
          link: "https://policies.google.com/technologies/ads?hl=ja",
          additionalContent: "Google プライバシーポリシー",
        },
        {
          title: "4. データ管理とセキュリティ",
          content:
            "収集したデータは、適切な期間保存され、不正アクセスや紛失、改ざんなどから保護するための措置を講じています。",
        },
        {
          title: "5. ユーザーの権利",
          content: "ユーザーは自身のデータに関して以下の権利を有します。",
          list: [
            "トラッキング許可の変更（iOS設定からATT設定を変更可能）",
            "データ収集停止や削除の依頼",
          ],
        },
        {
          title: "6. プライバシーポリシーの変更",
          content:
            "本ポリシーが変更された場合、アプリ内通知またはウェブページ更新などにより通知します。",
        },
        {
          title: "7. 広告設定とオプトアウト",
          content:
            "広告パーソナライズを無効にするには、以下のGoogle広告設定ページをご参照ください。",
          link: "https://adssettings.google.com/authenticated",
          additionalContent: "広告設定",
        },
      ],
      footer: {
        established: "制定日：2024年12月30日",
      },
    },
    en: {
      title: "Privacy Policy",
      intro:
        "This Privacy Policy describes how Triviiia (hereinafter referred to as 'the Service') handles personal information when you use our service.",
      sections: [
        {
          title: "1. Information We Collect",
          content:
            "We may collect the following information when you use our service:",
          list: [
            "Advertising ID",
            "Device information (model, OS version, etc.)",
            "App usage data",
            "Approximate location information",
          ],
          additionalContent:
            "This information may be collected through Google AdMob.\n\nAdditionally, we may request tracking permission from users for purposes such as ad personalization. You can change tracking permissions at any time in your iOS settings.",
        },
        {
          title: "2. How We Use Your Data",
          content: "The collected data is used for the following purposes:",
          list: [
            "Advertising delivery and optimization",
            "Improving app performance",
            "Enhancing user experience",
          ],
        },
        {
          title: "3. Sharing with Third Parties",
          content:
            "Please refer to the privacy policies of third-party services such as Google AdMob for information on how they handle data.",
          link: "https://policies.google.com/technologies/ads?hl=en",
          additionalContent: "Google Privacy Policy",
        },
        {
          title: "4. Data Management and Security",
          content:
            "The collected data is stored for an appropriate period and measures are taken to protect it from unauthorized access, loss, or alteration.",
        },
        {
          title: "5. Your Rights",
          content: "Users have the following rights regarding their data:",
          list: [
            "Change tracking permissions (you can change ATT settings from iOS settings)",
            "Request to stop or delete data collection",
          ],
        },
        {
          title: "6. Changes to This Privacy Policy",
          content:
            "If this policy is changed, we will notify you through in-app notifications or updates to our website.",
        },
        {
          title: "7. Ad Settings and Opt-Out",
          content:
            "To disable ad personalization, please refer to the following Google Ad Settings page.",
          link: "https://adssettings.google.com/authenticated",
          additionalContent: "Ad Settings",
        },
      ],
      footer: {
        established: "Established: December 30, 2024",
      },
    },
  };

  const currentContent = content[language];

  return (
    <div className="bg-custom-dark text-gray-100">
      <div className="max-w-2xl mx-auto p-6 ">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setLanguage("jp")}
            className={`${
              language === "jp"
                ? "bg-emerald-500 text-white"
                : "bg-gray-300 text-gray-700"
            }  font-bold py-2 px-4 rounded mr-2`}
          >
            日本語
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`${
              language === "en"
                ? "bg-emerald-500 text-white"
                : "bg-gray-300 text-gray-700"
            }  font-bold py-2 px-4 rounded mr-2`}
          >
            English
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-4">{currentContent.title}</h1>
        <p className="mb-4">{currentContent.intro}</p>

        {currentContent.sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold mt-8 mb-2">{section.title}</h2>
            <p className="mb-4">{section.content}</p>
            {section.list && (
              <ul className="list-disc list-inside mb-4">
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}
            {section.additionalContent && !section.link && (
              <p className="mb-4">{section.additionalContent}</p>
            )}
            {section.link && (
              <a
                href={section.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mb-4 block"
              >
                {section.additionalContent}
              </a>
            )}
          </div>
        ))}

        <p className="mt-8">{currentContent.footer.established}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
