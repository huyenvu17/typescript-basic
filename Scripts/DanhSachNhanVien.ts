import { NhanVien } from "./NhanVien";

export class DanhSachNhanVien{
  public MangNhanVien:Array<NhanVien> = [];
  constructor(){

  }
  public ThemNhanVien(NhanVienThem: NhanVien){
    this.MangNhanVien.push(NhanVienThem)
  }
}
