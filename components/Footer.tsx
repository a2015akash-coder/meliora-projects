export default function Footer() {
  return (
    <footer className="bg-white border-t border-meliora-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-serif font-bold text-meliora-black mb-2">Meliora Projects</div>
            <p className="text-sm text-gray-500">
              Town Planning & Social Impact Assessment Consultants
            </p>
          </div>
          
          <div className="text-sm text-gray-500 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Meliora Projects. All rights reserved.</p>
            <p className="mt-1">Serving New South Wales, Australia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
