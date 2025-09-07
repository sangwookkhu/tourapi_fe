import Title from "../atoms/Title";
import BackHeader from "../molecules/BackHeader";
import PermissionBox from "../organisms/login/PermissionBox";

interface CheckPermissionItemProps {
  onBack?: () => void;
  pageTitle: string;
  permissionList: { title: string; description: string }[];
  checkedList?: boolean[];
  defaultCheckedList?: boolean[];
  onChangeList?: ((next: boolean) => void)[];
  disabledList?: boolean[];
}

export default function PermissionCheckLayout({
  onBack,
  pageTitle,
  permissionList,
  checkedList,
  defaultCheckedList,
  onChangeList,
  disabledList,
}: CheckPermissionItemProps) {
  return (
    <>
      <div className="p-10 gap-10 mx-auto">
        <BackHeader onBack={onBack} />
        <div>
          <Title className="mt-14">{pageTitle}</Title>
          <PermissionBox
            permissionList={permissionList}
            checkedList={checkedList}
            defaultCheckedList={defaultCheckedList}
            onChangeList={onChangeList}
            disabledList={disabledList}
          />
        </div>
      </div>
    </>
  );
}
