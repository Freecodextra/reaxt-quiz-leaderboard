import React, { createContext } from "react";
import useLocalStorage from "../custom_hooks/useLocalStorage";

export const ParticipantsContext = createContext(null);
function ParticipantsProvider({ children }) {
  const [participants, setParticipants] = useLocalStorage("participants", []);
  return (
    <ParticipantsContext.Provider value={[participants, setParticipants]}>
      {children}
    </ParticipantsContext.Provider>
  );
}

export default ParticipantsProvider;
