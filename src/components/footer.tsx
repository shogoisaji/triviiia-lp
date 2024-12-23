export default function Footer() {
  return (
    <footer className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg" />
            <span className="text-xl font-semibold">Triviiia</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a href="/terms" className="text-gray-600 hover:text-gray-900">
              利用規約
            </a>
            <a href="/privacy" className="text-gray-600 hover:text-gray-900">
              プライバシーポリシー
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">
              お問い合わせ
            </a>
          </nav>

          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Triviiia. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
