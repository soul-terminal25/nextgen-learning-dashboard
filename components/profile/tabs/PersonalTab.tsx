import ProfileHeader from "../ProfileHeader";
import PersonalInfo from "../PersonalInfo";
import AddressInfo from "../AddressInfo";

export default function PersonalTab() {
  return (
    <div className="space-y-6">
      <ProfileHeader />
      <PersonalInfo />
      <AddressInfo />
    </div>
  );
}
