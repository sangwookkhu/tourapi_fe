import CheckPermissionItem from "../../molecules/PermissionCheckBox";

type CheckPermissionItemProps = {
  permissionList: { title: string; description: string }[];
  checkedList?: boolean[];
  defaultCheckedList?: boolean[];
  onChangeList?: ((next: boolean) => void)[];
  disabledList?: boolean[];
};

export default function PermissionBox({
  permissionList,
  checkedList,
  defaultCheckedList,
  onChangeList,
  disabledList,
}: CheckPermissionItemProps) {
  return (
    <div className="bg-[#EAEAEA] rounded-2xl mt-10 mb-20">
      {permissionList.map((permission, idx) => (
        <CheckPermissionItem
          key={idx}
          id={`permission${idx + 1}`}
          title={permission.title}
          desc={permission.description}
          checked={checkedList ? checkedList[idx] : undefined}
          defaultChecked={
            defaultCheckedList ? defaultCheckedList[idx] : undefined
          }
          onChange={onChangeList ? onChangeList[idx] : undefined}
          disabled={disabledList ? disabledList[idx] : undefined}
        />
      ))}
    </div>
  );
}
