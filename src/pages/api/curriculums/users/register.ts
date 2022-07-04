import type { ApiHandler } from '~/@types/pages/api';

export type PostRegisterUserHandler = ApiHandler<
  {
    lastName: string;
    firstName: string;
    email: string;
    sex: string;
    birthday: string;
  },
  unknown,
  {
    isSuccess: boolean;
  }
>;

const handler: PostRegisterUserHandler = async (req, res) => {
  const isSuccess = !!(Math.floor(Math.random() * 100) % 2);

  // リクエストタイムアウト時の実装をする際にコメントアウトを外してください
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  res.status(200).json({
    ...(isSuccess
      ? {
          data: {
            isSuccess,
          },
        }
      : {
          error: {
            status: 401,
            message: '通信に失敗しました。\n時間をおいて再度お試しください。',
          },
        }),
  });
};

export default handler;
