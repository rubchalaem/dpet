import SearchableSelect from "@/components/SearchableSelect";
import { Input } from "@/components/ui/input";
import { isBangkok, thaiAddress } from "@/lib/thai-address";

export type AddressData = {
  province: string;
  district: string;
  subdistrict: string;
  zipcode: string;
  detail: string;
};

export const emptyAddress: AddressData = {
  province: "",
  district: "",
  subdistrict: "",
  zipcode: "",
  detail: "",
};

type AddressFieldsProps = {
  title: string;
  value: AddressData;
  onChange: (next: AddressData) => void;
};

const AddressFields = ({ title, value, onChange }: AddressFieldsProps) => {
  const province = thaiAddress.find((item) => item.name === value.province);
  const district = province?.districts.find(
    (item) => item.name === value.district,
  );
  const subdistrict = district?.subdistricts.find(
    (item) => item.name === value.subdistrict,
  );
  const districtLabel = isBangkok(value.province) ? "เขต" : "อำเภอ";
  const subdistrictLabel = isBangkok(value.province) ? "แขวง" : "ตำบล";

  return (
    <div className="rounded-lg border border-border p-4">
      <h3 className="mb-3 font-bold">{title}</h3>
      <div className="grid gap-3 md:grid-cols-2">
        <SearchableSelect
          value={value.province}
          onChange={(provinceName) =>
            onChange({ ...emptyAddress, province: provinceName })
          }
          placeholder="จังหวัด"
          searchPlaceholder="พิมพ์ชื่อจังหวัด"
          options={thaiAddress.map((item) => ({
            value: item.name,
            label: item.name,
          }))}
        />
        <SearchableSelect
          value={value.district}
          onChange={(districtName) =>
            onChange({
              ...value,
              district: districtName,
              subdistrict: "",
              zipcode: "",
            })
          }
          placeholder={districtLabel}
          searchPlaceholder={`พิมพ์ชื่อ${districtLabel}`}
          disabled={!province}
          options={
            province?.districts.map((item) => ({
              value: item.name,
              label: item.name,
            })) || []
          }
        />
        <SearchableSelect
          value={value.subdistrict}
          onChange={(subdistrictName) => {
            const nextSubdistrict = district?.subdistricts.find(
              (item) => item.name === subdistrictName,
            );
            onChange({
              ...value,
              subdistrict: subdistrictName,
              zipcode: nextSubdistrict?.zipcodes[0] || "",
            });
          }}
          placeholder={subdistrictLabel}
          searchPlaceholder={`พิมพ์ชื่อ${subdistrictLabel}`}
          disabled={!district}
          options={
            district?.subdistricts.map((item) => ({
              value: item.name,
              label: item.name,
            })) || []
          }
        />
        <Input
          placeholder="รหัสไปรษณีย์"
          value={value.zipcode || subdistrict?.zipcodes[0] || ""}
          onChange={(e) => onChange({ ...value, zipcode: e.target.value })}
        />
        <Input
          className="md:col-span-2"
          placeholder="บ้านเลขที่ ถนน หมู่บ้าน หรือรายละเอียดเพิ่มเติม"
          value={value.detail}
          onChange={(e) => onChange({ ...value, detail: e.target.value })}
        />
      </div>
    </div>
  );
};

export default AddressFields;
