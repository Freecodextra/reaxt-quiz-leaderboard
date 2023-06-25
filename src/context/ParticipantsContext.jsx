import React, { createContext } from "react";
import useLocalStorage from "../custom_hooks/useLocalStorage";

export const ParticipantsContext = createContext(null);
const data = [{name: "Odunayo Joseph", church: "C.C.C Hanwa", score: 42}, {name: "Deborah Awe", church: "C.C.C Iyanu Parish", score: 30}, {name: "John Doe", church: "Westley Methodist", score: 39}, {name: "James Mary", church: "Chapel of Redemption", score: 15}, {name: "Kency Kanayo", church: "Catholic church", score: 27},{name: "Kelvin Uche", church: "Redeem Church", score: 49},{name: "Ayomide Daniel", church: "Mountain of Fire", score: 33},{name: "Nathaniel Johnson", church: "MFM", score: 37},{name: "Odunayo Johnson", church: "C.C.C Parish 1", score: 28},{name: "Daniel Oyetade", church: "Life of Christ", score: 32},{name: "Joseph Oyeleke", church: "God of Power", score: 45}]
function ParticipantsProvider({ children }) {
  const [participants, setParticipants] = useLocalStorage("participants", [...data]);
  return (
    <ParticipantsContext.Provider value={[participants, setParticipants]}>
      {children}
    </ParticipantsContext.Provider>
  );
}

export default ParticipantsProvider;
