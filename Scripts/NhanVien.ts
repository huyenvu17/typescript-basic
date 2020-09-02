export class NhanVien{
    public HoTen:string;
    public MaNhanVien:string;
    public LoaiNhanVien:number;
    public LuongCB:number;
    public LuongTongCong:number;
    
    constructor(HoTen:string, MaNhanVien:string, LoaiNhanVien:number, LuongCB:number){
        this.HoTen = HoTen;
        this.MaNhanVien = MaNhanVien;
        this.LoaiNhanVien = LoaiNhanVien;
        this.LuongCB = LuongCB;
    }
    public TinhLuong(){
      //this.LuongTongCong =  this.LuongCB;
      let tongLuong:number = 0;
      switch(this.LoaiNhanVien){
        case 1: {
          tongLuong = this.LuongCB;
          break;
        }
        case 2: {
          tongLuong = this.LuongCB*1.5;
          break;
        }
        case 3: {
          tongLuong = this.LuongCB*3;
          break;
        }
        default: {
          tongLuong = this.LuongCB;
          break;
        }
      }
      return tongLuong;
    }
    public layLoaiTenNhanVien(){
      switch(this.LoaiNhanVien){
        case 1: {
          return 'Nhân Viên Thường'
        }
        case 2: {
          return 'Quản Lý'
        }
        case 3: {
          return 'Giám Đốc'
        }
        default: {
          return 'Nhân Viên Thường'
        }
      }
    }
}
