import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const QuestionLayout = async ({ children }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <div className="md:hidden">
          <Navbar />
        </div>
        {children}
      </main>
    </div>
  );
};

export default QuestionLayout;
