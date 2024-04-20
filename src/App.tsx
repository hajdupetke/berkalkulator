import HouseholdSalaryCalculator from './components/HouseholdSalaryCalculator';

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col bg-slate-50 p-20">
      <h1 className="text-4xl text-black">Bérkalkulátor alkalmazás</h1>
      <HouseholdSalaryCalculator />
    </div>
  );
}

export default App;
