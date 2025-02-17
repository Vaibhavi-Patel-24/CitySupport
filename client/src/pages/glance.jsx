import { FaMap, FaGraduationCap, FaTree, FaShieldAlt, FaUsers, FaThLarge, FaLandmark, FaLanguage } from "react-icons/fa";

const DistrictAtGlance = () => {
  const data = [
    { icon: <FaMap />, label: "Area", value: "4500 sq. km" },
    { icon: <FaGraduationCap />, label: "Literacy Rate", value: "83.61%" },
    { icon: <FaTree />, label: "Villages", value: "597" },
    { icon: <FaShieldAlt />, label: "Police station", value: "21" },
    { icon: <FaUsers />, label: "Population", value: "23,60,000" },
    { icon: <FaThLarge />, label: "Block", value: "9" },
    { icon: <FaLandmark />, label: "Nagar Palika", value: "6" },
    { icon: <FaLanguage />, label: "Languages", value: "3" }
  ];

  return (
    <div className="bg-black text-white p-6 rounded-lg w-full max-w-lg">
      <h2 className="text-xl font-bold mb-4">~DISTRICT AT GLANCE</h2>
      <div className="grid grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="text-orange-500 text-lg">{item.icon}</span>
            <span className="font-semibold">{item.label}</span>
            <span className="text-gray-300">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DistrictAtGlance;
