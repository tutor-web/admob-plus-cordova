import BannerAd, { BannerAdOptions } from './banner';
import InterstitialAd from './interstitial';
import RewardedAd, { RewardedAdOptions, ServerSideVerificationOptions } from './rewarded';
import RewardedInterstitialAd, { RewardedInterstitialAdOptions } from './rewarded-interstitial';
import { Events, RequestConfig, TrackingAuthorizationStatus } from './shared';
export * from './api';
export { BannerAd, BannerAdOptions, InterstitialAd, RewardedAd, RewardedAdOptions, RewardedInterstitialAd, RewardedInterstitialAdOptions, ServerSideVerificationOptions, };
export declare class AdMob {
    readonly BannerAd: typeof BannerAd;
    readonly InterstitialAd: typeof InterstitialAd;
    readonly RewardedAd: typeof RewardedAd;
    readonly RewardedInterstitialAd: typeof RewardedInterstitialAd;
    readonly Events: typeof Events;
    readonly TrackingAuthorizationStatus: typeof TrackingAuthorizationStatus;
    constructor();
    configRequest(requestConfig: RequestConfig): Promise<unknown>;
    setAppMuted(value: boolean): Promise<unknown>;
    setAppVolume(value: number): Promise<unknown>;
    start(): Promise<{
        version: string;
    }>;
    requestTrackingAuthorization(): Promise<TrackingAuthorizationStatus | false>;
}
declare global {
    const admob: AdMob;
}
export default AdMob;
