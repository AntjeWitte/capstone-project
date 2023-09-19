import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

useRouter.mockImplementation(() => ({
  pathname: "/",
  push: () => {},
}));
