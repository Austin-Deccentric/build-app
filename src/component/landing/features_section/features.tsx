import React from "react";
import ClassroomCard from "@/component/landing/features_section/classroom_card";
import ForTechers from "@/component/landing/features_section/for_teachers";
import AssessmentsCard from "@/component/landing/features_section/assessment_card";
import ClassManagementSection from "@/component/landing/features_section/class_management_card";
import DiscussionsCard from "@/component/landing/features_section/discussion_card";

const Features = () => {
  return (
    <div>
      <ClassroomCard />
      <ForTechers />
      <AssessmentsCard />
      <ClassManagementSection />
      <DiscussionsCard />
    </div>
  );
};

export default Features;
