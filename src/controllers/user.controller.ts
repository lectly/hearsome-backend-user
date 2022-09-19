import { Request, Response, NextFunction } from "express";
import { S3 } from "../aws";

export class UserController {
  static async getSignedURL(req: Request, res: Response, next: NextFunction) {
    try {
      const { signedURL, objectName, bucketName } = await S3.getSignedURL();
      return res.status(200).json({ signedURL, objectName, bucketName });
    } catch (error) {
      return next(error);
    }
  }

  static async transcribe(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({
        result:
          " لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.",
      });
    } catch (error) {
      return next(error);
    }
  }
}
