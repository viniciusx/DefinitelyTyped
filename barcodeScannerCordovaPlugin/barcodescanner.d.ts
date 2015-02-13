interface ResultInterface {
    text: string;
    format: string;
    cancelled: boolean;
}
interface BarcodeEncode {
    type: Encode;
    data: any;
    success: (success: any) => void;
    fail: (error: any) => void;
}
interface EncodeOptions {
    TEXT_TYPE: string;
    EMAIL_TYPE: string;
    PHONE_TYPE: string;
    SMS_TYPE: string;
}
interface Encode {
    Encode: EncodeOptions;
    //cordova.plugins.barcodeScanner.Encode.TEXT_TYPE
}
interface BarCodeInterface {
    scan(success: (data: ResultInterface) => void, error: (data: string) => void): void;
    encode(type: string, data: any, success: (success: any) => void, fail: (error: any) => void): void;
    Encode: EncodeOptions;
}

declare module "barcodescanner" {
    export = barcodeScanner;
}

declare var barcodeScanner: BarCodeInterface;  