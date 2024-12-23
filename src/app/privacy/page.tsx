export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">
                1. 個人情報の収集について
              </h2>
              <p className="text-gray-600">
                当社は、本サービスの提供にあたり、以下の個人情報を収集することがあります：
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>氏名</li>
                <li>メールアドレス</li>
                <li>利用履歴</li>
                <li>端末情報</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                2. 個人情報の利用目的
              </h2>
              <p className="text-gray-600">
                収集した個人情報は、以下の目的で利用します：
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>本サービスの提供・運営のため</li>
                <li>ユーザーからのお問い合わせに対応するため</li>
                <li>利用規約に違反する行為に対応するため</li>
                <li>サービスの改善のため</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                3. 個人情報の第三者提供
              </h2>
              <p className="text-gray-600">
                当社は、法令に基づく場合を除き、ユーザーの同意を得ることなく、個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. 個人情報の保護</h2>
              <p className="text-gray-600">
                当社は、個人情報の漏洩、滅失、き損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                5. プライバシーポリシーの変更
              </h2>
              <p className="text-gray-600">
                当社は、必要に応じて、このプライバシーポリシーの内容を変更することがあります。変更後のプライバシーポリシーは、当社が別途定める場合を除いて、本ウェブサイトに掲載したときから効力を生じるものとします。
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
