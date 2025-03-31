// components/CTABanner.jsx

import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="tw-pt-12 tw-pb-24 tw-text-center">
      <div className="tw-container tw-max-w-[856px] tw-mx-auto">
        <div className="tw-relative tw-bg-gradient-to-r tw-from-yellow-500 tw-via-red-500 tw-to-yellow-500 tw-text-white tw-rounded-xl tw-shadow-2xl tw-p-10">
          <div className="tw-absolute -tw-top-5 tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-text-4xl">
            ✨
          </div>

          <h2 className="tw-text-4xl sm:tw-text-5xl tw-font-extrabold tw-mb-4 tw-tracking-wide tw-flex tw-items-center tw-justify-center tw-gap-3">
            🔒 Lock & Earn Big! 💰
          </h2>

          <div className="tw-w-full sm:tw-w-auto tw-mx-auto tw-bg-yellow-400 tw-text-yellow-900 tw-text-2xl sm:tw-text-3xl tw-font-bold tw-px-10 tw-py-3 tw-rounded-lg tw-border-2 tw-border-yellow-600 tw-shadow-xl">
            🚀 ADAO Staking is Live!
          </div>

          <p className="tw-text-lg sm:tw-text-xl tw-mt-6 tw-font-medium tw-leading-relaxed">
            Earn passive rewards by staking ADAO. The longer you stake, the{" "}
            <span className="tw-font-bold tw-text-yellow-300">bigger the rewards!</span>
          </p>

          <div className="tw-mt-6">
            <Link
              href="/staking"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-inline-block tw-px-8 tw-py-4 tw-bg-white tw-text-yellow-700 tw-font-extrabold tw-text-xl tw-rounded-lg tw-shadow-lg tw-transition-all tw-duration-300 tw-ease-in-out tw-transform hover:tw-bg-yellow-600 hover:tw-text-white hover:tw-scale-105"
            >
              💎 Stake & Earn Now!
            </Link>
          </div>

          <div className="tw-absolute tw-bottom-5 tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-text-4xl">
            ✨
          </div>
        </div>
      </div>
    </section>
  );
}
