/** 项目公共配置 **/

// 基本路径
export const VITE_BASE_PATH = '/';
// 开启 mock
export const VITE_APP_MOCK: boolean = true;
// 开启包依赖分析 可视化
export const VITE_APP_ANALYZE: boolean = false;
// 开启Gzip压缩
export const VITE_APP_COMPRESS_GZIP: boolean = false;
// 开启Gzip压缩，删除原文件
export const VITE_APP_COMPRESS_GZIP_DELETE_FILE: boolean = false;
// 去除 console
export const VITE_DROP_CONSOLE: boolean = true;
// 开启兼容
export const VITE_APP_LEGACY: boolean = true;

/** AI视频面试配置 **/
export const ELI_VIDEO_INTERVIEW_PORT = 9001;
export const ELI_VIDEO_INTERVIEW_BASE_URL = 'https://fbm-api-demo2.fbmms.cn';
export const ELI_VIDEO_INTERVIEW_AUTHORIZATION = (): Promise<any> =>
  new Promise((resolve, reject) => {
    fetch('https://fbm-dev1e.fbmms.cn/aiProcess/credential', {
      method: 'GET',
      headers: {
        authorization: 'Basic oq799kWLjhimoJQhNPaE9FFpAsTSoP6eqnLp',
      },
    })
      .then(async res => {
        const { data } = await res.json();
        resolve(data);
      })
      .catch(err => reject(err));
  });

/** 资料收集配置 **/
export const ELI_MATERIAL_COLLECTION_PORT = 9002;
export const ELI_MATERIAL_COLLECTION_BASE_URL = `https://fbm-demo3e.fbmms.cn`;
export const ELI_MATERIAL_COLLECTION_AUTHORIZATION = 'Basic Mcqr9bZfUcgQS8YqEltfnssAEJ5IxdhstAUF';

/** 反作弊配置 **/
export const ELI_ANTI_CHEATING_PORT = 9003;
export const ELI_ANTI_CHEATING_BASE_URL = `https://fbm-dev3e.fbmms.cn`;
export const ELI_ANTI_CHEATING_AUTHORIZATION = 'Basic fTBHSRKisWNsY7I4Pl9T9UrV9CgI1g8jLHNu';

/** 证件照拍摄 **/
export const ELI_PHOTO_SHOOTING_PORT = 9004;
export const ELI_PHOTO_SHOOTING_BASE_URL = `https://demo-id-photo.fbmms.cn`;
export const ELI_PHOTO_SHOOTING_AUTHORIZATION = (): Promise<any> =>
  new Promise((resolve, reject) => {
    fetch('https://fbm-demo2e.fbmms.cn/idPhoto/credential', {
      method: 'GET',
      headers: {
        authorization: 'Basic fEJafyMIqmtg1YpZYiuDH0Db9N4D2LWYdFH6',
      },
    })
      .then(async res => {
        const { data } = await res.json();
        resolve(data);
      })
      .catch(err => reject(err));
  });
