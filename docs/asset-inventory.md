# Asset inventory

## Sources and repository locations

| Supplied file | Private working location | Intended use |
| --- | --- | --- |
| `Over here... (1).pdf` | `references/` | 21-slide Canva design and copy reference. See [design specification](design-spec.md) and [portfolio copy](project-content.md). |
| `glacial-indifference.zip` | `source-assets/fonts/` | Original Glacial Indifference Regular and Bold files and OFL license. |
| `providence-sans-regular.zip` | `source-assets/fonts/` | Reference for the supplied legacy Providence face and its actual distribution terms. |
| `OnlineWebFonts_COM_d3dcfdd32127af14727c9c04fae86d52.zip` | `source-assets/fonts/` | Third-party Providence Sans Office Bold kit evaluated during Phase 2. |
| `AboutMe_Images.zip` | `source-assets/about/` | Seven portrait-oriented candidates for the About Me 3D photo carousel. |
| `Senior_Capstone_Images.zip` | `source-assets/senior-capstone/` | Five candidates for the capstone gallery and supporting case study photography. |
| `SimV_Assets.zip` | `source-assets/simventions/` | Three candidates for the SimVentions Mission Support gallery. |

These are suggested locations if the attachments need to be copied into a local checkout. The originals and slide renders stay in untracked working storage. Approved local fonts live under `public/fonts/` and approved web artwork under `public/images/`.

## Fonts

| Supplied member | Embedded family and style | Format | Status |
| --- | --- | --- | --- |
| `GlacialIndifference-Regular.otf` | Glacial Indifference Regular, 400 | OpenType CFF | Embedded locally as `public/fonts/GlacialIndifference-Regular.otf`. The Canva PDF also identifies Glacial Indifference Regular. |
| `GlacialIndifference-Bold.otf` | Glacial Indifference Bold, 700 | OpenType CFF | Embedded locally as `public/fonts/GlacialIndifference-Bold.otf`. |
| `SIL Open Font License.txt` | SIL Open Font License 1.1 | Text | Shipped as `public/fonts/GlacialIndifference-OFL.txt` with the copyright and reserved-name notice from the font metadata. |
| `Providence Sans Regular/Providence Sans Regular.otf` | Providence, style Sans, PostScript name `Providence-Sans`, weight class 500 | OpenType CFF | Private. The Canva PDF embeds `ProvidenceSansPro-Bold` and `ProvidenceSansPro`. The supplied legacy face has a different font identity, and the archive provides no web distribution license. |
| `Providence Sans Regular/readme.html` | Download-site redirect template | HTML | Private. It contains no web embedding or redistribution grant. |
| `Providence Sans Offc W00 Bold/` in the OnlineWebFonts ZIP | `ProvidenceSansOffcW00-Bold`, version 7.504, weight 700. The TTF, WOFF, and WOFF2 name records identify Guy Jeffrey Nelson and FSI FontShop International (2009) and reference a FontFont EULA. | TrueType, WOFF, WOFF2, EOT, SVG | Private. The Office edition differs from `ProvidenceSansPro-Bold`, the face embedded in both landing slides. |

Glacial Indifference may be bundled and served under OFL 1.1 with its notice and license. The font metadata reserves the name Glacial Indifference. Both files are the supplied, unchanged OpenType originals. The archive contains no WOFF2, and a trial conversion changed an OpenType header flag in addition to the checksum. [SIL Open Font License FAQ, section 2](https://openfontlicense.org/ofl-faq/)

The OnlineWebFonts ZIP includes a generic CC BY 4.0 attribution notice that also cautions some downloads require a separate embedding license. The listing for this specific file provides no license details. A font-specific web-use grant from the publisher and terms permitting repository distribution were unavailable. The kit stays in private storage. [Third-party file listing](https://www.onlinewebfonts.com/download/f36a026fd7fae583b3e2bb8a56584207) [FontFont family and licensing](https://www.myfonts.com/collections/ff-providence-sans-font-fontfont)

Handwritten text in Phase 2 continues to use Gaegu Bold 700 temporarily. The Latin WOFF2 (`public/fonts/gaegu-latin-700-normal.woff2`) and its OFL 1.1 notice (`public/fonts/Gaegu-OFL.txt`) are unchanged copies from `@fontsource/gaegu` version 5.3.0. Its letterforms differ from the Canva font. [Fontsource Gaegu distribution](https://www.npmjs.com/package/@fontsource/gaegu/v/5.3.0)

Replace the temporary face when matching Providence Sans Pro webfonts and the applicable licenses are available. If a future license permits website use only, supply the asset privately to the build or hosting environment. Fonts embedded as subsets in the PDF stay in the reference document. The PDF also contains Inter 18pt Regular and Bold and Anton Regular in some mockup text. [Official webfont license terms](https://www.myfonts.com/pages/license-agreement?id=eula_2277)

## Landing artwork

`public/images/landing-character.svg` contains the six vector paths for the hand-drawn character isolated from slide 2 of the supplied Canva PDF. The SVG preserves the black outline and white interior on a transparent background. The lettering and gradients remain separate page elements. The original PDF stays in private storage.

## Photograph inventory

Dimensions below are pixels after applying the original EXIF orientation. Each file remains private. Gallery captions and alt text should be checked against the selected image before publishing.

| Archive member | Display dimensions | Intended use or reference match |
| --- | --- | --- |
| `AboutMe_Images/DSC_3011.JPG` | 4000 × 6000 | About Me carousel. |
| `AboutMe_Images/DSC_3027.JPG` | 4000 × 6000 | About Me carousel. |
| `AboutMe_Images/DSC_3625.JPG` | 4000 × 6000 | About Me carousel. |
| `AboutMe_Images/IMG_0634.jpeg` | 3024 × 4032 | About Me carousel. |
| `AboutMe_Images/IMG_5826.jpeg` | 3024 × 4032 | About Me carousel. |
| `AboutMe_Images/IMG_9179.jpeg` | 3024 × 4032 | About Me carousel. |
| `AboutMe_Images/IMG_9574.JPG` | 3024 × 4032 | About Me carousel. GPS metadata is present in the original. |
| `IMG_4820.JPG` | 4032 × 3024 | Capstone dry-run photo shown on slide 14. GPS metadata is present in the original. |
| `cachedMedia.JPG` | 5472 × 3648 | Capstone group portrait shown on slide 10. The same portrait appears as a visual placeholder on slide 15. |
| `IMG_3927.JPG` | 3024 × 4032 | Capstone team-meeting photo shown on slide 14. Screen and participant details need review. |
| `L1000435.JPG` | 3360 × 2520 | Additional capstone gallery candidate. |
| `IMG_3866.jpg` | 3024 × 4032 | Additional capstone gallery candidate. GPS metadata is present in the original. |
| `SimV_Assets/IMG_1981.JPG` | 4032 × 3024 | SimVentions gallery candidate. GPS metadata is present in the original. |
| `SimV_Assets/IMG_2187.JPG` | 6000 × 4000 | SimVentions gallery candidate. |
| `SimV_Assets/IMG_6803.jpeg` | 5712 × 4284 | SimVentions gallery candidate. GPS metadata is present in the original. |

The photo archives include no stated image license or publication approval. Before creating public derivatives, confirm rights and any applicable participant, sponsor, employer, and brand permissions. Review faces, badges, signage, meeting screens, projected slides, and visible work materials. Bake in the original orientation and strip EXIF, GPS, and device metadata from exported files. Preserve aspect ratios, provide intrinsic dimensions and responsive sizes, and lazy-load below-the-fold photographs. Use only source-backed descriptions for the SimVentions gallery.

## Assets and copy to resolve

| Location | Available material or gap | Treatment |
| --- | --- | --- |
| Slide 8, Skills | The PDF contains the badge portrait, lanyard artwork, and organization logos. Standalone approved versions and final skills copy are pending. | Keep an empty badge/lanyard structure. Confirm future artwork and copy before adding them. |
| Slide 9, About Me | The reference shows a sample placeholder image and shadow. Seven photographs are supplied separately. | Use the supplied portraits once approved for the carousel. |
| Slides 11 and 14, Senior Capstone | The old salon website screenshot, team sketch, alternate group photo, and channel overlay appear only in the PDF. | Use approved archive photos where they fit. Keep a documented placeholder for any necessary illustration or screenshot until a publishable source is available. Keep the internal channel view private. |
| Slides 15–17, Digital Asset Management | There is no approved application screenshot. The reference uses the capstone portrait on slide 15 and leaves parts of the case study copy unfinished. | Use a labelled screenshot placeholder where needed and preserve the copy gaps described in [portfolio copy](project-content.md). |
| Slides 18–19, Taxonomy & IT Solutions | No approved internal screenshots, diagrams, or data-transfer materials are supplied. | Use the public-facing case study copy. Add media later once cleared for publication. |
| Slide 21, SimVentions Mission Support | The podium photo appears only in the PDF. The gallery ZIP supplies three different photos without project associations. | Use approved gallery photos with descriptive alt text. Request a cleared copy of the podium photo if needed. |
| HackVA 2027 | There is no supplied project artwork or completed case study copy. | Keep the coming-soon state. |

The SimVentions internship video is an external resource. The case study should open the supplied link in a new tab with `rel="noopener noreferrer"`. Keep the video on LinkedIn. [Internship video](https://www.linkedin.com/posts/julie-t-836794332_multimedia-videoproduction-graphicdesign-activity-7498023932017692672-TsK6?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFPD7KoButB8pfZGOd7JsGN4tDOJnkgetWw)
