import React from "react";
import { motion } from "framer-motion";
import "./styles/sub11.css";

export default function Sub1() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="kp"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="om">
        <motion.img
          src="src\components\t1.png"
          className="trophy"
          alt="info"
         
          variants={itemVariants}
        />

        <motion.h1 variants={itemVariants}> Our Mission </motion.h1>

        <motion.p variants={itemVariants}>
          <bold> Our Vision </bold>: Buzybrain Intellect envisions a world where
          every individual, recognizes and maximizes their unique abilities and
          intelligence. We are dedicated to creating a global community of
          empowered individuals who lead purposeful and fulfilling lives. <br />
          <br />
          Our Mission: To empower individuals to unlock their full potential and
          achieve holistic growth by providing comprehensive programs that
          foster mental, emotional, physical, spiritual, and financial
          well-being. We are committed to delivering excellence through
          innovative approaches that inspire confidence and success.
        </motion.p>
      </div>
      <div className="om">
        <motion.img
          src="src\components\ii2.jpg"
          className="trophy"
          alt="info"
          variants={itemVariants}
        />
        <motion.h1 variants={itemVariants}>
          Embarking on a Journey of Educational Empowerment <br/> The Evolution of
          BuzyBrain Intellect Pvt. Ltd.
        </motion.h1>
        <motion.p variants={itemVariants}>
          In the year <strong>2016</strong>, a small but ambitious organization
          named "<strong>Vrisha Enterprises</strong>" was born with a noble
          mission – to empower and uplift children, fostering their academic
          potential and shaping promising career prospects. The journey began
          with a clear vision of creating a positive impact on the lives of
          young minds, igniting a passion for learning and growth. Within a mere
          two years, the response from the community was nothing short of
          remarkable. The overwhelming support and success stories fueled a
          collective determination to take this mission to greater heights. This
          pivotal moment marked the inception of "
          <strong>BuzyBrain Intellect Pvt. Ltd.</strong>," our commitment to
          transforming education and personal development.
          <br />
          <br /> As we reflect on our journey from{" "}
          <strong>Vrisha Enterprises</strong> to{" "}
          <strong>BuzyBrain Intellect Pvt. Ltd.</strong>, we express gratitude
          for the support received and eagerly anticipate the continued growth
          and success that the future holds for us and the communities we serve.
          The story of <strong>BuzyBrain</strong> is a testament to the power of
          vision, dedication, and the transformative impact that education can
          have on individuals and society as a whole. <br />
          <br /> <strong>Six Years of Dedication and Innovation:</strong> For
          the past six years, <strong>BuzyBrain</strong> has been unwaveringly
          committed to its mission. We have worked relentlessly to eliminate the
          stress that often accompanies the educational journey, providing
          individuals with the tools and support they need to adapt and thrive
          in every aspect of life.
          <br />
          <br />
          <strong>What Sets Us Apart:</strong>
          <br />
          • Comprehensive Approach: Our programs go beyond conventional
          learning, addressing all aspects of personal development and spiritual
          growth.
          <br />
          • Excellence with Innovation: We embrace innovation to ensure our
          offerings are at the forefront of effectiveness and relevance.
          <br />
          • Global Inclusivity: We believe that every individual, regardless of
          their background, deserves the opportunity to discover their unique
          talents.
          <br />
          <br />
          Join us on this transformative journey at Buzybrain Intellect, where
          we empower you to not only discover but also amplify your
          capabilities. Together, let's embark on a path of continuous learning,
          growth, and success. Welcome to a brighter, more empowered future with
          Buzybrain Intellect Private Limited!
        </motion.p>
      </div>

      <div className="ot">
        <motion.h1 variants={itemVariants}> Our Team </motion.h1>
<img src="src\components\images\team.png" height={400} width={400} />
        <motion.div className="allpi" variants={itemVariants}>

          <motion.div className="pi" variants={itemVariants}>

            <motion.img
              src="src\components\images\passport.jpeg"
              className="person"
              alt="Vinod Gadkar"
              height={380}
              width={300}
            />

<div class="ids">
  <p className="pititle"> VINOD GADKAR </p>
  <h5 className="pipost"> DIRECTOR </h5>
  <h6>DEGREE</h6>
  <p> M.S. in Computer Science </p>
  <h6>WORK</h6>
  <p> Software Development </p>
  <h6>EMAIL</h6>
  <p> vinod.gadkar@example.com </p>
</div>




          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
}
