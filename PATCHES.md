# Local patches

Vendored from `admob-plus-cordova@1.9.2` (upstream's last stable release,
2021-05-02; the project has since stalled — see
https://github.com/admob-plus/admob-plus/issues/547). Patched here because
upstream can't track current `play-services-ads` releases, which we need for
the Android 14+ "Writable dex file is not allowed" AdMob startup crash fix.

- `src/android/AdMob.java`: replaced the removed `MobileAds.getVersionString()`
  call with `MobileAds.getVersion().toString()`.
- `plugin.xml`: bumped the default `PLAY_SERVICES_VERSION` from `20.0.0` to
  `25.5.0` to match.

When bumping `PLAY_SERVICES_VERSION` in `package.json` in future, check
`src/android/AdMob.java` still compiles against the new SDK — Google has
changed this file's API surface before.
