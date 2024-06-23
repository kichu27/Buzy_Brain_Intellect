import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import About from "./components/About";
import Demo from "./components/Demo";
import CoursesCom from "./components/CoursesCom";
import Service from "./components/Service";
import ContactUs from "./components/Contact";
import BuzyBrainFranchise from "./components/Franchise";
import Sidebar from "./components/Sidebar";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const Data = [
  {
    title: "Discover Your Childs Unique Strength",
    description:
      "Every child is unique, possessing individual strengths. Our approach involves recognizing and nurturing these unique qualities, allowing each child to shine in their own way.",
  },
  {
    title: "Teach Anger and Stress Management",
    description:
      "Equip yourself with the knowledge and skills to guide your child in effective anger and stress management. Through these essential life skills, we empower both parents and children to navigate challenges with resilience.",
  },
  {
    title: "Mental, Physical, and Emotional Support",
    description:
      "Parenting is a commitment to providing holistic support—mentally, physically, and emotionally. By understanding and meeting your child's needs, you contribute to their overall well-being and development.",
  },
  {
    title: "Developing a Great Personality",
    description:
      "Uncover the secrets to nurturing a great personality in your child. From instilling positive values to fostering communication skills, we guide parents on the journey to shaping well-rounded individuals.",
  },
];

const Data1 = [
  {
    title: "Harnessing Positive Beliefs",
    description:
      "The program focuses on identifying and reshaping limiting beliefs stored in the subconscious mind. By cultivating positive beliefs, individuals can reprogram their thinking patterns and align them with their goals.",
  },
  {
    title: "Empowering Visualization Techniques",
    description:
      "Visualization is a powerful tool that influences the subconscious mind. Our program introduces effective visualization techniques to help individuals vividly imagine and manifest their desired outcomes, be it academic success, career advancement, or personal growth.",
  },
  {
    title: "Affirmations for Success",
    description:
      "Positive affirmations act as seeds planted in the subconscious, nurturing a mindset of success and abundance. The Subconscious Mind Power Program guides participants in crafting and incorporating affirmations tailored to their aspirations.",
  },
  {
    title: "Stress and Anxiety Management",
    description:
      "The program addresses stress and anxiety by introducing techniques to calm the subconscious mind. Managing stress is essential for creating a conducive mental environment for growth, creativity, and overall well-being.",
  },
  {
    title: "Goal Alignment and Achievement",
    description:
      "Aligning subconscious beliefs with personal and professional goals is a key aspect of the program. Participants learn how to set and achieve goals by harmonizing their conscious and subconscious minds.",
  },
];

const Data2 = [
  {
    title: "Empathy and Understanding",
    description:
      "The program emphasizes the cultivation of empathy and a deep understanding of the diverse needs, challenges, and aspirations of students. By developing a keen sense of empathy, teachers can create a nurturing environment that encourages open communication and trust.",
  },
  {
    title: "Effective Communication Strategies",
    description:
      "Teachers learn impactful communication strategies that transcend traditional methods. Effective communication is the cornerstone of emotional connection, enabling teachers to convey not just knowledge but also understanding, encouragement, and support.",
  },
  {
    title: "Creating a Positive Classroom Culture",
    description:
      "The program guides educators in fostering a positive classroom culture that promotes collaboration, inclusivity, and a sense of belonging. A positive environment is essential for students to thrive emotionally and academically.",
  },
  {
    title: "Recognizing and Addressing Emotional Needs",
    description:
      "Teachers are equipped with tools to recognize and address the emotional needs of students. Whether dealing with stress, anxiety, or personal challenges, understanding and addressing emotional needs contribute to a supportive and empowering learning environment.",
  },
  {
    title: "Incorporating Mindfulness Practices",
    description:
      "Mindfulness practices are integrated into the program to help teachers and students alike manage stress and foster emotional well-being. Mindfulness enhances focus, resilience, and emotional intelligence in both educators and students.",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/franchise",
    element: <BuzyBrainFranchise />,
  },
  {
    path: "/About",
    element: <About />,
  },

  {
    path: "/joyofparenting",
    element: (
      <Demo
        title="JOY OF PARENTING"
        i="1st.jpg"
        para1="At Buzybrain Intellect Private Limited, we embrace the profound philosophy that Good Parenting Guarantees Good Children. We
    believe that the journey of parenting is a transformative
    experience that not only shapes the child but also raises the
    parent to new heights. Our approach is anchored in the
    understanding that before you raise your kids, you must first
    raise yourself "
        para2=" Contrary to the misconception that parenting is about control, we
    see it as a holistic process. Parenting is the art of supporting a
    child's needs across emotional, physical, mental, and intellectual
    dimensions, guiding them toward becoming competent, well-rounded
    adults. It is not about molding minds; it is about inculcating
    spirituality, independence, joy, learning, love, hopes,
    responsibility, and the myriad of beautiful qualities that nature
    intended"
        data={Data}
        outro=" Buzybrain Intellect Private Limited invites you to explore the art
    and science of parenting with us. Raise yourself, raise your kids,
    and embark on a journey that enriches lives, builds futures, and
    fosters the growth of extraordinary individuals. Parenting at
    Buzybrain is about embracing the beauty of the journey, sowing the
    seeds of greatness, and cultivating a future filled with promise and
    potential. and science of parenting with us. Raise yourself, raise
    your kids."
      />
    ),
  },

  {
    path: "/Subconscious",
    element: (
      <Demo
        title=" Subconscious Mind Power Program at BuzyBrain Intellect  "
        i="2nd.jpg"
        para1="Welcome to a Flourishing Inner Transformational Journey that delves deep into the realms of your mind—introducing the Subconscious Mind Power Program at BuzyBrain. 
        We believe in the untapped potential residing within every individual, waiting to be unlocked and harnessed for personal and professional success.
         "
        para2=" Contrary to the misconception that parenting is about control, we
    see it as a Understanding the Subconscious Mind:
    The subconscious mind is a reservoir of immense power and influence. It stores beliefs, memories, and patterns that shape our thoughts, behaviors, and outcomes in life. BuzyBrain's Subconscious Mind Power Program is crafted to help you tap into this reservoir and channel its energy for positive change.
     process. Parenting is the art of supporting a
    child's needs across emotional, physical, mental, and intellectual
    dimensions, guiding them toward becoming competent, well-rounded
    adults. It is not about molding minds; it is about inculcating
    spirituality, independence, joy, learning, love, hopes,
    responsibility, and the myriad of beautiful qualities that nature
    intended"
        data={Data1}
        benefits={[
          {
            title: "Overcoming Challenges of Youth",
            description:
              "YCEP is crafted to address the unique challenges and responsibilities that come with youth. It serves as a guiding light to navigate through complexities, empowering you to overcome obstacles and emerge stronger.",
          },
          {
            title: "Clarity in Career Choices",
            description:
              "In the phase of youth, career choices can be overwhelming. YCEP assists you in making informed decisions, providing clarity about your purpose, and helping you choose a career path that aligns with your aspirations.",
          },
          {
            title: "Self-Discovery and Improvement",
            description:
              "YCEP facilitates self-discovery, allowing you to identify your strengths, values, beliefs, and areas of improvement. The program guides you on a journey of personal growth, empowering you to become the best version of yourself.",
          },
          {
            title: "Enhanced Personality and Body Language",
            description:
              "Elevate your overall personality with YCEP. Learn the nuances of effective communication, positive body language, and presentation skills, creating a lasting impression in personal and professional interactions.",
          },
          {
            title: "Boosting Career to Peak Level",
            description:
              "YCEP is your gateway to peak-level career development. Acquire the skills and mindset needed to excel in your chosen field, unlocking opportunities for professional growth and success.",
          },
          {
            title: "Interview Fear Management",
            description:
              "Develop skills to deal with interview fear through specialized training provided by YCEP. Overcome anxiety and present your best self during interviews, increasing your chances of success in the competitive job market.",
          },
          {
            title: "Self-Confidence and Motivation",
            description:
              "YCEP empowers you to boost self-confidence and stay self-motivated consistently. Cultivate a positive mindset that fuels your ambition, helping you overcome challenges with resilience and determination.",
          },
          {
            title: "Time Management Mastery",
            description:
              "Learn effective time management skills to work efficiently and productively. YCEP equips you with tools and strategies to organize your tasks, prioritize effectively, and achieve your goals within stipulated timelines.",
          },
          {
            title: "Patience and Improved Focus",
            description:
              "Cultivate patience and enhance focus in your work. YCEP guides you on the path to becoming more patient and disciplined, contributing to increased productivity and success.",
          },
          {
            title: "Self-Awareness and Goal Setting",
            description:
              "Gain self-awareness about your values, beliefs, and life purpose through YCEP. Set clear goals aligned with your aspirations, providing a roadmap for personal and professional achievements.",
          },
        ]}
        outro=" Buzybrain Intellect Private Limited invites you to explore the art
    and science of parenting with us. Raise yourself, raise your kids,
    and embark on a journey that enriches lives, builds futures, and
    fosters the growth of extraordinary individuals. Parenting at
    Buzybrain is about embracing the beauty of the journey, sowing the
    seeds of greatness, and cultivating a future filled with promise and
    potential. and science of parenting with us. Raise yourself, raise
    your kids."
      />
    ),
  },

  {
    path: "/Teachers",
    element: (
      <Demo
        title=" TEACHERS ILLUMINATING PROGRAM"
        i="img5.png"
        para1="Embark on a Transformational Journey with the Teachers Illuminating Program at BuzyBrain Intellect Private Limited

        At BuzyBrain, we understand the pivotal role teachers play in shaping the minds and futures of the next generation. Introducing the Teachers Illuminating Program—a unique initiative designed to empower educators with the tools and insights needed to emotionally connect with students and facilitate their transformative journey.
         to a Flourishing Inner Transformational Journey that delves deep into the realms of your mind—introducing the Subconscious Mind Power Program at BuzyBrain. 
        We believe in the untapped potential residing within every individual, waiting to be unlocked and harnessed for personal and professional success.
         "
        para2=" Teaching is not merely about imparting knowledge; it's a profound journey of connection, inspiration, and transformation. The Teachers Illuminating Program is crafted to enrich this journey by fostering emotional connections between teachers and students. We believe that a connected and supportive learning environment is the catalyst for holistic student development.
        ntrary to the misconception that parenting is about control, we
    see it as a Understanding the Subconscious Mind:
    The subconscious mind is a reservoir of immense power and influence. It stores beliefs, memories, and patterns that shape our thoughts, behaviors, and outcomes in life. BuzyBrain's Subconscious Mind Power Program is crafted to help you tap into this reservoir and channel its energy for positive change.
     process. Parenting is the art of supporting a
    child's needs across emotional, physical, mental, and intellectual
    dimensions,  them toward becoming competent, well-rounded
    adults. It is not about molding minds; it is about inculcating
    spirituality, independence, joy, learning, love, hopes,
    responsibility, and the myriad of beautiful qualities that nature
    intended"
        data={Data2}
        benefits={[
          {
            title: "Enhanced Teacher-Student Relationships",
            description:
              "Cultivating emotional connections leads to stronger, more meaningful relationships between teachers and students, creating a conducive atmosphere for learning and growth.",
          },
          {
            title: "Improved Academic Performance",
            description:
              "Emotional connection positively impacts academic performance, as students are more engaged, motivated, and receptive to learning when they feel emotionally supported.",
          },
          {
            title: "Nurtured Social and Emotional Skills",
            description:
              "Through the program, teachers contribute to the development of students' social and emotional skills, essential for their overall well-being and future success.",
          },
          {
            title: "Joyful and Positive Learning Environment",
            description:
              "A connected and emotionally supportive classroom fosters joy and positivity, making the learning experience enjoyable and memorable for both teachers and students.",
          },
        ]}
        outro=" Buzybrain Intellect Private Limited invites you to explore the art
    and science of parenting with us. Raise yourself, raise your kids,
    and embark on a journey that enriches lives, builds futures, and
    fosters the growth of extraordinary individuals. Parenting at
    Buzybrain is about embracing the beauty of the journey, sowing the
    seeds of greatness, and cultivating a future filled with promise and
    . and science of parenting with us. Raise yourself, raise
    your kids."
      />
    ),
  },
  {
    path: "/Step",
    element: (
      <CoursesCom
        coursename="STEP"
        coursecontent="Buzybrain Intellect Private Limited proudly presents STEP – a transformative initiative meticulously crafted to guide students in conquering academic challenges and nurturing their overall development. STEP is a comprehensive program that addresses issues like examination fear, mental stress, lack of concentration, confidence, and grasping power. This unique program integrates various transformative techniques for holistic student empowerment."
        i="step1.png"
        data={[
          {
            title: "Overcome Academic Challenges",
            description:
              "STEP empowers students to overcome common academic challenges such as examination fear, mental stress, and lack of concentration. By providing a supportive environment, STEP helps students navigate the educational journey with confidence.",
          },
          {
            title: "Enhanced Cognitive Abilities",
            description:
              "Through Comprehensive Human Transformational Techniques, STEP stimulates cognitive growth. The program incorporates NLP (Neuro-Linguistic Programming), a powerful tool that reshapes thought patterns, fostering a positive mindset and improved cognitive abilities.",
          },
          {
            title: "Harmony Therapy for Emotional Well-being",
            description:
              "STEP includes Harmony Therapy to address emotional well-being. This therapeutic approach promotes emotional balance, reduces stress, and enhances mental resilience, creating a harmonious foundation for personal growth.",
          },
          {
            title: "Memory Enhancement Techniques",
            description:
              "Students benefit from memory enhancement techniques integrated into STEP. These techniques sharpen memory skills, aiding in better retention and recall of information during studies and examinations.",
          },
          {
            title: "Unlocking Brain Potential with DBIT",
            description:
              "The program explores the study of brain potential through DBIT (Dermatoglyphics Brain Intelligence Test). This one-time test offers insights into unique cognitive strengths and potential areas for improvement, guiding students towards effective learning strategies.",
          },
          {
            title: "Midbrain Activation for Accelerated Learning",
            description:
              "STEP incorporates Midbrain Activation, a technique that accelerates learning by tapping into the midbrain's potential. This method enhances concentration, memory, and overall cognitive functions, facilitating a more efficient learning process.",
          },
          {
            title: "Personality Development for Holistic Growth",
            description:
              "Personality Development is an integral part of STEP, fostering holistic growth in students. This component enhances interpersonal skills, self-confidence, and communication abilities, laying the foundation for personal and professional success.",
          },
          {
            title: "Stimulate Cognitive Growth with Mindfulness",
            description:
              "STEP powerfully stimulates cognitive growth by addressing various aspects of mental well-being. The program's multi-faceted approach ensures a comprehensive transformation, preparing students for both academic and life challenges.",
          },
          {
            title: "Joy of Parenting for Developing a Great Personality",
            description:
              "Parenting is the art of supporting a child's needs across emotional, physical, mental, and intellectual dimensions, guiding them toward becoming competent, well-rounded adults. It is not about molding minds; it is about inculcating spirituality, independence, joy, learning, love, hopes, responsibility, and the myriad of beautiful qualities that nature intended.",
          },
        ]}
      />
    ),
  },
  {
    path: "/Ycep",
    element: (
      <CoursesCom
        coursename="YCEP(Youth Career Empowerment
          Program)"
        coursecontent="BuzybraBuzybrain Intellect Private Limited presents YCEP – a comprehensive Youth Career Empowerment Program meticulously designed to guide you through the challenges of youth, helping you overcome addiction, procrastination, depression, interview fear, lack of self-confidence, and the fear of failure. This program is your key to identifying your true self, developing essential skills, enhancing your overall personality, and setting your career on an upward trajectory.in Intellect Private Limited proudly presents STEP – a transformative initiative meticulously crafted to guide students in conquering academic challenges and nurturing their overall development. STEP is a comprehensive program that addresses issues like examination fear, mental stress, lack of concentration, confidence, and grasping power. This unique program integrates various transformative techniques for holistic student empowerment."
        i="step1.png"
        data={[
          {
            title: "Overcoming Challenges of Youth",
            description:
              "YCEP is crafted to address the unique challenges and responsibilities that come with youth. It serves as a guiding light to navigate through complexities, empowering you to overcome obstacles and emerge stronger.",
          },
          {
            title: "Clarity in Career Choices",
            description:
              "In the phase of youth, career choices can be overwhelming. YCEP assists you in making informed decisions, providing clarity about your purpose, and helping you choose a career path that aligns with your aspirations.",
          },
          {
            title: "Self-Discovery and Improvement",
            description:
              "YCEP facilitates self-discovery, allowing you to identify your strengths, values, beliefs, and areas of improvement. The program guides you on a journey of personal growth, empowering you to become the best version of yourself.",
          },
          {
            title: "Enhanced Personality and Body Language",
            description:
              "Elevate your overall personality with YCEP. Learn the nuances of effective communication, positive body language, and presentation skills, creating a lasting impression in personal and professional interactions.",
          },
          {
            title: "Boosting Career to Peak Level",
            description:
              "YCEP is your gateway to peak-level career development. Acquire the skills and mindset needed to excel in your chosen field, unlocking opportunities for professional growth and success.",
          },
          {
            title: "Interview Fear Management",
            description:
              "Develop skills to deal with interview fear through specialized training provided by YCEP. Overcome anxiety and present your best self during interviews, increasing your chances of success in the competitive job market.",
          },
          {
            title: "Self-Confidence and Motivation",
            description:
              "YCEP empowers you to boost self-confidence and stay self-motivated consistently. Cultivate a positive mindset that fuels your ambition, helping you overcome challenges with resilience and determination.",
          },
          {
            title: "Time Management Mastery",
            description:
              "Learn effective time management skills to work efficiently and productively. YCEP equips you with tools and strategies to organize your tasks, prioritize effectively, and achieve your goals within stipulated timelines.",
          },
          {
            title: "Patience and Improved Focus",
            description:
              "Cultivate patience and enhance focus in your work. YCEP guides you on the path to becoming more patient and disciplined, contributing to increased productivity and success.",
          },
          {
            title: "Self-Awareness and Goal Setting",
            description:
              "Gain self-awareness about your values, beliefs, and life purpose through YCEP. Set clear goals aligned with your aspirations, providing a roadmap for personal and professional achievements.",
          },
        ]}
      />
    ),
  },
  {
    path: "/Kmep",
    element: (
      <CoursesCom
        coursename="KMEP (Kids Memory Enhancement
          Program)"
        coursecontent="Buzybrain Intellect Private Limited proudly presents STEP – a transformative initiative meticulously crafted to guide students in conquering academic challenges and nurturing their overall development. STEP is a comprehensive program that addresses issues like examination fear, mental stress, lack of concentration, confidence, and grasping power. This unique program integrates various transformative techniques for holistic student empowerment."
        i="kmep2.png"
        data={[
          {
            title: "Overcome Academic Challenges",
            description:
              "STEP empowers students to overcome common academic challenges such as examination fear, mental stress, and lack of concentration. By providing a supportive environment, STEP helps students navigate the educational journey with confidence.",
          },
          {
            title: "Enhanced Cognitive Abilities",
            description:
              "Through Comprehensive Human Transformational Techniques, STEP stimulates cognitive growth. The program incorporates NLP (Neuro-Linguistic Programming), a powerful tool that reshapes thought patterns, fostering a positive mindset and improved cognitive abilities.",
          },
          {
            title: "Harmony Therapy for Emotional Well-being",
            description:
              "STEP includes Harmony Therapy to address emotional well-being. This therapeutic approach promotes emotional balance, reduces stress, and enhances mental resilience, creating a harmonious foundation for personal growth.",
          },
          {
            title: "Memory Enhancement Techniques",
            description:
              "Students benefit from memory enhancement techniques integrated into STEP. These techniques sharpen memory skills, aiding in better retention and recall of information during studies and examinations.",
          },
          {
            title: "Unlocking Brain Potential with DBIT",
            description:
              "The program explores the study of brain potential through DBIT (Dermatoglyphics Brain Intelligence Test). This one-time test offers insights into unique cognitive strengths and potential areas for improvement, guiding students towards effective learning strategies.",
          },
          {
            title: "Midbrain Activation for Accelerated Learning",
            description:
              "STEP incorporates Midbrain Activation, a technique that accelerates learning by tapping into the midbrain's potential. This method enhances concentration, memory, and overall cognitive functions, facilitating a more efficient learning process.",
          },
          {
            title: "Personality Development for Holistic Growth",
            description:
              "Personality Development is an integral part of STEP, fostering holistic growth in students. This component enhances interpersonal skills, self-confidence, and communication abilities, laying the foundation for personal and professional success.",
          },
          {
            title: "Stimulate Cognitive Growth with Mindfulness",
            description:
              "STEP powerfully stimulates cognitive growth by addressing various aspects of mental well-being. The program's multi-faceted approach ensures a comprehensive transformation, preparing students for both academic and life challenges.",
          },
          {
            title: "Joy of Parenting for Developing a Great Personality",
            description:
              "Parenting is the art of supporting a child's needs across emotional, physical, mental, and intellectual dimensions, guiding them toward becoming competent, well-rounded adults. It is not about molding minds; it is about inculcating spirituality, independence, joy, learning, love, hopes, responsibility, and the myriad of beautiful qualities that nature intended.",
          },
        ]}
      />
    ),
  },
  {
    path: "/dbit",
    element: (
      <Service
        title="DBIT"
        content="  Welcome to a revolutionary approach towards understanding and nurturing individual potential – the Dermatoglyphics Brain Intelligence Test (DBIT) at BuzyBrain Intellect Private Limited. A transformative Dermatoglyphics Brain Intelligence Test (DBIT) is not just a test; it's a journey into the intricate relationship between fingerprint patterns and the brain, DBIT is a scientific study rooted in dermatoglyphics  exploring the fascinating connections between fingerprint patterns, brain, multiple intelligences, genetics, and psychology. This cutting-edge technology aims to depths unveil your inborn talents, artistic skills, and strengths while identifying the most effective learning styles tailored to your unique profile 
        The Essence of DBIT: DBIT stands as a testament to the synergy between science and self-discovery. Our DBIT Test Report is meticulously crafted based on the scientific study of dermatoglyphics (fingerprint patterns) and comprehensive brain analysis.
        "
        i="dbit1.png"
        data={[
          {
            title: "Enhance Emotional Intelligence",
            description:
              "Activate your child's midbrain to elevate emotional intelligence, fostering a better understanding and management of emotions. This lays the foundation for improved social interactions and overall well-being.",
          },
          {
            title: "Develop Concentration (Learn Faster)",
            description:
              "Midbrain activation facilitates heightened concentration levels, enabling your child to grasp information more quickly and efficiently. This results in accelerated learning and improved academic performance.",
          },
          {
            title: "Expands Memory (Recall when needed)",
            description:
              "Strengthen memory retention through midbrain activation, allowing your child to recall information when needed. This skill is invaluable for academic success and lifelong learning.",
          },
          {
            title: "Increase Creativity (Focused on Solutions)",
            description:
              "Unleash your child's creative potential by activating the midbrain. This fosters a solution-focused mindset, nurturing innovative thinking and problem-solving abilities.",
          },
          {
            title: "Improve Sports Ability (Better Motor Skills)",
            description:
              "Midbrain activation contributes to improved motor skills, enhancing your child's coordination and physical abilities. This is beneficial for sports and other physical activities.",
          },
          {
            title: "Enrich Intuition (Proper Decision)",
            description:
              "Cultivate a heightened sense of intuition through midbrain activation, empowering your child to make informed and confident decisions in various aspects of life.",
          },
        ]}
        outro="At Buzybrain Intellect Private Limited, DBIT is more than a test; it's a holistic approach to unlocking your full potential. Join us on this journey of self-discovery, where the intricate connection between the brain and fingers opens doors to a world of possibilities. Embrace the power of DBIT and chart a course towards a future that aligns with your true capabilities. Welcome to a new era of self-awareness and empowerment."
      />
    ),
  },
  {
    path: "/midbrain",
    element: (
      <Service
        title="MID-BRAIN"
        content="  The midbrain, often referred to as the communication-bridge
    between the left and right brain, plays a crucial role in
    coordinating activities to enhance memory and sensory perception. At
    Buzybrain Intellect Private Limited, we introduce the Midbrain
    Activation Method, a transformative process dedicated to improving a
    child's learning capability and enhancing perception in visual,
    auditory, and motor systems."
        i="mindbrain2.png"
        data={[
          {
            title: "Multiple Intelligence",
            description:
              "DBIT unveils your hidden talents by assessing your multiple intelligences, offering a holistic understanding of your cognitive abilities.",
          },
          {
            title: "Learning Styles",
            description:
              "It discovers your most suitable learning style, empowering you to optimize your educational journey for success.",
          },
          {
            title: "Brain Dominance",
            description:
              "It explores the balance between left brain and right brain dominance, providing insights into your behavioral traits and character.",
          },
          {
            title: "Personality Assessment",
            description:
              "It helps to understand your personality type, paving the way for enhanced self-awareness and personal development.",
          },
          {
            title: "Career Guidance",
            description:
              "DBIT doesn't just stop at assessment; It guides you towards suitable career options aligned with your inherent strengths.",
          },
          {
            title: "Acquiring Method",
            description:
              "It gains valuable insights into your preferred methods of acquiring knowledge and skills.",
          },
          {
            title: "Area of Concern & Remedies",
            description:
              "It helps to identify areas of concern and receive recommendations for targeted remedies to enhance your overall well-being.",
          },
          {
            title: "Extra-Curricular Activity",
            description:
              "It tailor your extra-curricular pursuits based on your unique cognitive profile, ensuring a well-rounded and fulfilling lifestyle.",
          },
        ]}
        outro="At Buzybrain Intellect Private Limited, we are committed to unlocking the latent potential within every child through the transformative Midbrain Activation Method. Join us in shaping a future where your child excels academically, socially, and emotionally. Welcome to a world of enhanced capabilities and boundless possibilities"
      />
    ),
  },
  {
    path: "/memory-techniques",
    element: (
      <Service
        title="Memory Techniques"
        content="At Buzybrain Intellect Private Limited, we recognize the pivotal role memory plays in academic success and personal development. Our innovative approach harnesses the potential of 'Memory Techniques' to empower students, enabling them to become super-achievers in their studies."
        i="memoryt2.png"
        data={[
          {
            title: "Accelerated Learning",
            description:
              "Memory Techniques pave the way for accelerated learning, allowing students to cover their syllabus ten times faster. This not only saves time but also ensures a deep and lasting retention of information.",
          },
          {
            title: "Enhanced Memory Power",
            description:
              "Experience a significant boost in memory power, reaching peak levels with the application of Memory Techniques. This heightened memory capacity enables students to effortlessly recall information during exams and daily learning activities.",
          },
          {
            title: "Improved Concentration",
            description:
              "Memory Techniques contribute to improved concentration power, helping students stay focused and engaged during their studies. Enhanced concentration leads to more efficient learning and a deeper understanding of subjects.",
          },
          {
            title: "Effortless Memorization of Long Answers",
            description:
              "One of the remarkable benefits of Memory Techniques is the ability to memorize long answers with ease. Students can simplify complex information, making it more manageable and creating a heightened interest in their studies.",
          },
          {
            title: "Quick Revision",
            description:
              "With Memory Techniques, students can revise quickly and effectively. The organized approach to memorization allows for efficient review sessions, ensuring that key concepts are reinforced and retained.",
          },
          {
            title: "Overcoming Examination Phobia",
            description:
              "Memory Techniques provide students with the tools to overcome examination phobia. The confidence gained from the ability to recall information easily and quickly fosters a positive mindset, reducing anxiety during exams.",
          },
          {
            title: "Interest in Studies",
            description:
              "By making the memorization process interesting and effective, Memory Techniques cultivate a genuine interest in studies. Students find joy in the learning process, making education a fulfilling and rewarding experience.",
          },
        ]}
        outro="Incorporating Memory Techniques into your child's learning journey at Buzybrain Intellect Private Limited is a commitment to unlocking their full academic potential. Join us in revolutionizing the way students approach their studies, creating a future where learning is efficient, enjoyable, and highly successful. Elevate your child's learning experience with Memory Techniques and open the door to a world of academic excellence. Welcome to a brighter future with Buzybrain Intellect Private Limited!"
      />
    ),
  },
  {
    path: "/counseling",
    element: (
      <Service
        title="Counseling"
        content="Embark on a journey of self-discovery and personal growth with counseling at Buzybrain Intellect Private Limited. Our counseling services are designed to help individuals navigate challenges, gain clarity, and explore their thoughts and feelings in a safe and confidential environment."
        i="counseling1.png"
        data={[
          {
            title: "Explore Your Thoughts and Feelings",
            description:
              "Counseling is a supportive process that allows individuals to delve into their thoughts and feelings. It provides a platform for self-reflection, helping you gain a deeper understanding of your emotions and experiences.",
          },
          {
            title: "Change and Personal Growth",
            description:
              "People often seek counseling when they desire change in their lives or wish to explore personal growth opportunities. Our counselors guide you through this transformative process, helping you identify areas for improvement and facilitating positive change.",
          },
          {
            title: "Talking Therapies for Emotional Well-being",
            description:
              "Counseling is often referred to as 'talking therapies' because it emphasizes open communication. Through dialogue, individuals can express their concerns, fears, and challenges, contributing to emotional well-being.",
          },
          {
            title: "Safe and Confidential Environment",
            description:
              "Buzybrain Intellect Private Limited provides a secure and confidential space for counseling sessions. This environment fosters trust and openness, allowing you to share your thoughts and concerns without fear of judgment.",
          },
          {
            title: "Different Viewpoints and Perspectives",
            description:
              "Counselors offer a fresh perspective on your problems and difficulties. They help you see challenges from different viewpoints, encouraging a broader understanding that can lead to more effective problem-solving.",
          },
          {
            title: "Uncover Root Causes",
            description:
              "Counseling aims to uncover the root causes of challenges and difficulties. By exploring underlying issues, individuals can address the core of their concerns, leading to more sustainable solutions.",
          },
          {
            title: "Identification of Thought Patterns",
            description:
              "Through counseling, individuals can identify specific thought patterns that may contribute to challenges. Awareness of these patterns is the first step toward developing healthier ways of thinking and responding.",
          },
          {
            title: "Encouragement to Express Concerns",
            description:
              "Counselors at Buzybrain Intellect Private Limited encourage open communication. They create a supportive environment where you can express your concerns, fears, and aspirations, promoting emotional release and relief.",
          },
        ]}
        outro="Counseling at Buzybrain Intellect Private Limited is not just about addressing difficulties; it's about guiding you towards a path of self-discovery, resilience, and personal empowerment. Join us in unlocking your full potential and navigating life's challenges with confidence. Welcome to a transformative counseling experience where your journey to self-awareness and growth begins."
      />
    ),
  },
  {
    path: "/personality-development",
    element: (
      <Service
        title="Personality Development"
        content="Personality development, often synonymous with self-improvement, personal growth, and human development, is the transformative journey towards enhancing the unique qualities that define an individual. At BuzyBrain Intellect Private Limited, we recognize that personality encompasses the overall development of physical, mental, and emotional characteristics, making it a fundamental aspect of one's identity."
        i="personality1.png"
        data={[
          {
            title: "Self-Discovery",
            description:
              "Personality development begins with self-awareness. Understand your strengths, weaknesses, values, and beliefs to embark on a journey of self-discovery, laying the foundation for personal growth.",
          },
          {
            title: "Holistic Development",
            description:
              "Personality development involves the comprehensive improvement of physical, mental, and emotional aspects. It's a holistic approach that fosters growth in all spheres of an individual's life.",
          },
          {
            title: "Conscious Effort for Likability",
            description:
              "Likability is not an accident but a conscious effort. Personality development enables individuals to consciously cultivate qualities that make them likable and respected by others.",
          },
          {
            title: "Continuous Improvement",
            description:
              "A good personality is a product of continuous improvement. Personality development encourages individuals to embrace a mindset of growth and adaptability, fostering an ongoing journey of self-improvement.",
          },
          {
            title: "Cultivation of Positive Traits",
            description:
              "Personality development involves the cultivation of positive traits such as empathy, resilience, and optimism. These traits contribute to a positive outlook on life and enhance interpersonal relationships.",
          },
          {
            title: "Effective Communication",
            description:
              "Enhance your communication skills through personality development. Learn to articulate thoughts clearly, listen actively, and express ideas in a way that fosters understanding and collaboration.",
          },
          {
            title: "Confidence Building",
            description:
              "Confidence is a cornerstone of a strong personality. Personality development empowers individuals to build confidence by acknowledging their strengths, setting goals, and overcoming challenges.",
          },
          {
            title: "Professional Success",
            description:
              "A well-developed personality is an asset in the professional realm. It influences how others perceive you and contributes to success in career endeavors, leadership roles, and team collaborations.",
          },
          {
            title: "Emotional Intelligence",
            description:
              "Personality development nurtures emotional intelligence, allowing individuals to understand and manage their emotions effectively. This skill is crucial for navigating social situations and building healthy relationships.",
          },
          {
            title: "Adaptability and Flexibility",
            description:
              "Develop adaptability and flexibility through personality development. Embrace change, learn from experiences, and cultivate a mindset that thrives in diverse and dynamic environments.",
          },
        ]}
        outro="At Buzybrain Intellect Private Limited, we believe in the transformative power of personality development. Join us on a journey of self-discovery and growth, where you can unlock your full potential and cultivate a personality that radiates confidence, positivity, and authenticity. Welcome to a brighter future with enhanced personal and professional capabilities!"
      />
    ),
  },
  {
    path: "/nlp",
    element: (
      <Service
        title="NLP / Neuro-Linguistic Programming"
        content="At Buzybrain Intellect Private Limited, we understand the profound impact of the mind on personal well-being and achievement. Introducing Neuro-Linguistic Programming (NLP), a transformative technique designed to empower individuals to overcome challenges, boost confidence, and unlock their limitless mind power. Neuro-Linguistic Programming is a powerful approach to understanding and influencing human behavior."
        content2="In essence, NLP is a methodology that explores the intricate connections between our neurological processes, language, and behavioral patterns. It offers practical tools and techniques to understand how individuals perceive the world, communicate, and respond to stimuli. By recognizing and modifying patterns in thinking and behavior."
        i="nlp1.jpg"
        data={[
          {
            title:
              "Eliminate Lack of Confidence, Depression, and Cultivate Happiness",
            description:
              "NLP is a powerful tool for breaking free from the shackles of self-doubt, depression, and negativity. By tapping into the subconscious mind, individuals can reshape their thought patterns, fostering a positive mindset and lasting happiness.",
          },
          {
            title: "Utilize Limitless Mind Power",
            description:
              "Every individual is born with limitless mind power, but many fail to harness it fully. NLP provides the tools to unlock and utilize the subconscious mind's potential, enabling individuals to achieve their goals and aspirations.",
          },
          {
            title: "Goal Setting and Achievement",
            description:
              "NLP empowers individuals to set and achieve their goals effectively. By leveraging visualization and programming techniques, individuals can align their actions with their aspirations, turning dreams into reality.",
          },
          {
            title: "Control Over Unconscious Habits",
            description:
              "NLP helps individuals take control of uncontrolled behaviors and break free from unwanted habits effortlessly. By reprogramming the mind, one can establish new, positive habits that align with personal growth and success.",
          },
          {
            title: "Overcome Fear, Phobia, Anxiety, and Depression",
            description:
              "Fear, phobia, anxiety, and depression can be formidable challenges. NLP provides effective tools to overcome these hurdles by reshaping thought patterns and promoting mental resilience.",
          },
          {
            title: "Children as Super-Achievers",
            description:
              "NLP is a valuable resource for enhancing children's academic and life achievements. By instilling positive behavioral patterns and goal-setting skills, NLP equips children to become super-achievers in their studies and beyond.",
          },
          {
            title: "Visualization Power for Goal Setting",
            description:
              "NLP emphasizes the power of visualization to set and achieve goals. By creating a clear mental image of desired outcomes, individuals can enhance focus and motivation, paving the way for success.",
          },
          {
            title: "Effortless Habit Lock with Mobile",
            description:
              "NLP facilitates the establishment of positive habits effortlessly. By creating triggers and associations, individuals can lock in habits that support personal growth and well-being.",
          },
          {
            title: "Confidence, Motivation, and Happiness Triggers",
            description:
              "NLP enables the creation of triggers for confidence, motivation, and happiness. By programming the mind to respond positively to specific cues, individuals can cultivate a mindset that propels them toward success.",
          },
        ]}
        outro="At Buzybrain Intellect Private Limited, we believe in the transformative power of NLP. Embrace this technique to take control of your mind, eliminate obstacles, and unleash your true potential. Join us on a journey of self-discovery, where NLP becomes the key to a happier, more confident, and fulfilling life. Welcome to a world of limitless possibilities with Buzybrain Intellect Private Limited!"
      />
    ),
  },


 

]);

root.render(
 
    <RouterProvider router={router} />
  
);
