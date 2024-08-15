import React, { useState } from "react";
import { Modal } from "../../../../shared/components/molecules/modal/Modal";
import { AddPodcast } from "../../components/projectDetailsTabs/AddPodcast/AddPodcast";
import youtubeIcon from "/images/icons/youtube.jpg";

const ProjectDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <AddPodcast setOpenModal={setOpenModal} />
      {openModal && (
        <Modal
          title={"Upload from Youtube"}
          inputFields={[
            { name: "name", label: "Name" },
            { name: "description", label: "Description" },
          ]}
          buttonFields={[{ label: "Upload" }]}
          btnBgColor={"blue"}
          btnColor={"white"}
          iconBeforeTitle={youtubeIcon}
          onClickOutside={() => {
            setOpenModal(false);
          }}
        />
      )}
    </div>
  );
};

export { ProjectDetails };
