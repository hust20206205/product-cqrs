export abstract class BaseException extends Error {
    constructor(message: string) {
      super(message);
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  

  import { BaseException } from './exceptions/exception.base';

export class ProductException extends BaseException {
  constructor(message: string) {
    super(message);
  }
}



import { ProductException } from './path/to/ProductException';

try {
  // Thực hiện một số công việc liên quan đến sản phẩm
  // Nếu có lỗi xảy ra, ném ra ProductException
  throw new ProductException('Không thể tạo sản phẩm do thiếu thông tin');
} catch (error) {
  if (error instanceof ProductException) {
    console.error('Đã xảy ra lỗi với sản phẩm:', error.message);
    // Xử lý lỗi theo ý của bạn, có thể hiển thị thông báo cho người dùng hoặc ghi vào nhật ký
  } else {
    console.error('Đã xảy ra một lỗi khác:', error.message);
    // Xử lý lỗi khác nếu cần thiết
  }
}
