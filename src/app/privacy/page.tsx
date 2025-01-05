"use client";

import { useState } from "react";

const PrivacyPolicy = () => {
  const [language, setLanguage] = useState<"jp" | "en">("jp");

  const content = {
    jp: {
      title: "プライバシーポリシー",
      intro:
        "このプライバシーポリシーは、Triviiia（以下、「本サービス」といいます。）が提供するサービスにおける、以下の通りプライバシーポリシー（以下「本ポリシー」と言います。）を定めます。",
      section1: {
        title: "1. 個人情報の収集について",
        content:
          "当社は、本サービス提供にあたり以下の個人情報を収集する場合があります：",
        list: [
          "デバイスID（広告IDなど）",
          "おおよその位置情報",
          "アプリ使用状況データ（操作履歴）",
          "クラッシュデータおよびパフォーマンスデータ",
        ],
      },
      section2: {
        title: "2. 情報収集の目的",
        content: "当社は、以下の目的で収集した情報を使用します：",
        list: [
          "広告表示および最適化",
          "サービス改善のための分析",
          "クラッシュやパフォーマンス問題の診断",
        ],
      },
      section3: {
        title: "3. 第三者への提供",
        content:
          "当社は、Google AdMobによって収集された情報を第三者と共有する場合があります。詳細についてはGoogleプライバシーポリシーをご参照ください。",
        link: "https://policies.google.com/technologies/ads?hl=ja",
      },
      section4: {
        title: "4. ユーザー権利と選択肢",
        content: "ユーザーは以下の方法で自身の情報管理が可能です：",
        list: [
          "端末設定から広告IDをリセットまたは削除",
          "アプリ内設定画面より同意内容変更または撤回",
          "アプリ削除によるデータ収集停止",
        ],
      },
      section5: {
        title: "5. プライバシーポリシー更新について",
        content:
          "本ポリシーが変更された場合、当社ウェブサイトまたはアプリ内で通知します。",
      },
      footer: {
        established: "制定日：2024年12月30日",
      },
    },
    en: {
      title: "Privacy Policy",
      intro:
        "This Privacy Policy describes how Triviiia (hereinafter referred to as 'the Service') collects, uses, and shares information about you when you use our service.",
      section1: {
        title: "1. Collection of Personal Information",
        content:
          "We may collect the following personal information in connection with the provision of this service:",
        list: [
          "Device ID (such as advertising ID)",
          "Approximate location information",
          "App usage data (operation history)",
          "Crash data and performance data",
        ],
      },
      section2: {
        title: "2. Purpose of Using Personal Information",
        content: "We use the collected information for the following purposes:",
        list: [
          "Advertising display and optimization",
          "Analysis for service improvement",
          "Diagnosis of crash and performance issues",
        ],
      },
      section3: {
        title: "3. Provision to Third Parties",
        content:
          "We may share information collected by Google AdMob with third parties. Please refer to the Google Privacy Policy for details.",
        link: "https://policies.google.com/technologies/ads?hl=en",
      },
      section4: {
        title: "4. User Rights and Options",
        content: "Users can manage their information in the following ways:",
        list: [
          "Reset or delete the advertising ID from the device settings",
          "Change or withdraw consent from the in-app settings screen",
          "Stop data collection by deleting the app",
        ],
      },
      section5: {
        title: "5. About Privacy Policy Updates",
        content:
          "If this policy is changed, we will notify you on our website or within the app.",
      },
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

        <h2 className="text-2xl font-bold mt-8 mb-2">
          {currentContent.section1.title}
        </h2>
        <p className="mb-4">{currentContent.section1.content}</p>
        <ul className="list-disc list-inside mb-4">
          {currentContent.section1.list &&
            currentContent.section1.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-2">
          {currentContent.section2.title}
        </h2>
        <p className="mb-4">{currentContent.section2.content}</p>
        <ul className="list-disc list-inside mb-4">
          {currentContent.section2.list &&
            currentContent.section2.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-2">
          {currentContent.section3.title}
        </h2>
        <p className="mb-4">{currentContent.section3.content}</p>

        <h2 className="text-2xl font-bold mt-8 mb-2">
          {currentContent.section4.title}
        </h2>
        <p className="mb-4">{currentContent.section4.content}</p>

        <h2 className="text-2xl font-bold mt-8 mb-2">
          {currentContent.section5.title}
        </h2>
        <p className="mb-4">{currentContent.section5.content}</p>

        <p className="mt-8">{currentContent.footer.established}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
