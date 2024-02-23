import Image from "next/image";
import {
  MeasurementIcon,
  CatalogueIcon,
  UploadIcon,
  FolderIcon
} from "@/assets";
import { Services as Wrapper } from "./Services.style";

export default function Services() {
  return (
    <Wrapper>
      <h2>Services you will enjoy</h2>
      <div className="services">
        <div className="service">
          <Image src={MeasurementIcon} alt="measurement" />
          <h4>Measurement</h4>
          <p>Store your customers measurements and style</p>
        </div>

        <div className="service">
          <Image src={CatalogueIcon} alt="catalogue" />
          <h4>Catalogue</h4>
          <p>Have a style catalogue for your customers</p>
        </div>

        <div className="service">
          <Image src={UploadIcon} alt="upload" />
          <h4>Upload</h4>
          <p>Upload inspirations and customers styles</p>
        </div>

        <div className="service">
          <Image src={FolderIcon} alt="folder" />
          <h4>Customer folder</h4>
          <p>Manage customers folder without stress</p>
        </div>
      </div>
    </Wrapper>
  );
}
