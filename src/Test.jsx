import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="course">
      <motion.ul
       
      ></motion.ul>
      
    </div>
  );
};

export default Test;
