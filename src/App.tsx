import HouseholdSalaryCalculator from './components/HouseholdSalaryCalculator';

function App() {
  return (
    <div className="h-full w-screen flex justify-center items-center flex-col bg-slate-50 p-8">
      <h1 className="text-4xl text-black font-bold">
        Bérkalkulátor alkalmazás
      </h1>
      <HouseholdSalaryCalculator />
    </div>
  );
}

export default App;
