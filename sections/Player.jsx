import Link from "next/link";
import styles from "../styles";

const Player = () => {
  return (
    <section className={`${styles.paddings} bg-green-900`} id="player">
      <svg
        width="1040"
        height="432"
        className="object-cover h-48 w-full md:h-96 xl:mt-24"
        viewBox="0 0 1040 432"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M452.523 0.638336C451.523 1.23834 448.423 1.93832 445.723 2.13834C443.023 2.43832 439.523 3.23834 437.923 4.03833C436.323 4.83835 433.823 5.53833 432.423 5.53833C431.023 5.53833 426.823 7.13834 423.223 9.03833C419.623 10.9383 415.823 12.5383 414.823 12.5383C412.423 12.5383 407.923 14.6383 407.923 15.7383C407.923 16.1383 407.623 16.4383 407.223 16.3383C405.523 15.7383 394.923 22.6384 393.323 25.4384C392.323 27.0384 390.523 28.9384 389.123 29.6384C387.823 30.3383 385.823 32.3383 384.623 34.0384C383.423 35.6384 382.223 37.2384 381.823 37.5384C381.423 37.8383 379.923 40.5384 378.523 43.5384C377.123 46.5384 374.823 50.5384 373.423 52.3383C368.623 58.9384 366.623 66.1384 367.223 75.5384C368.123 92.2384 373.523 98.2384 389.023 99.4384C389.423 99.5384 390.823 101.338 392.323 103.538C393.723 105.638 395.823 107.938 397.023 108.638C399.023 109.638 398.923 109.438 396.523 106.338C393.123 101.738 393.223 100.538 397.023 100.938C399.223 101.238 399.723 100.938 399.023 100.238C398.423 99.6384 397.923 98.3383 397.923 97.3383C397.923 95.6384 398.123 95.6384 400.923 97.7384C402.623 98.9384 403.923 100.438 403.923 100.938C403.923 101.538 405.023 103.338 406.323 105.038L408.723 108.038L408.223 105.238C407.823 103.038 408.023 102.538 409.623 102.538C411.723 102.538 413.523 106.438 414.423 113.538C414.823 116.038 415.723 119.738 416.523 121.838C417.323 123.838 417.923 126.938 417.923 128.638C417.923 130.738 418.823 132.538 420.923 134.338C422.523 135.838 424.523 138.838 425.223 141.038C426.023 143.238 428.723 149.238 431.323 154.438C434.423 160.838 435.623 164.238 434.923 164.938C434.423 165.438 426.123 166.238 416.723 166.638C398.023 167.338 396.723 167.638 383.423 174.338C371.823 180.138 362.623 183.138 352.423 184.538C333.623 187.038 320.923 190.838 317.423 194.938C311.623 201.738 294.523 203.338 274.523 199.038C259.723 195.838 250.423 195.838 237.423 198.938C231.923 200.338 223.123 202.138 217.923 203.038C212.723 203.938 195.123 207.738 178.923 211.538C135.023 221.838 117.023 225.438 103.323 226.538C96.5232 227.038 88.8232 228.038 86.2232 228.638C83.6232 229.138 76.7232 230.238 70.9232 230.938C65.1232 231.638 58.4232 232.938 55.9232 233.838C53.4232 234.638 49.4232 235.938 46.9232 236.538C36.0232 239.338 33.3232 240.438 29.6232 243.638C27.4232 245.538 24.3232 247.738 22.9232 248.538C19.3232 250.538 6.92317 262.038 6.92317 263.338C6.92317 263.938 7.62317 265.138 8.52317 266.038C10.0232 267.538 10.0232 267.838 8.02317 269.938C5.52317 272.538 5.42317 273.838 7.42317 275.538C8.72317 276.538 8.62317 277.238 6.72317 280.838C0.923167 292.438 -1.47683 307.338 0.923167 317.638C7.92317 347.438 40.6232 362.038 74.9232 350.638C88.4232 346.038 96.9232 340.738 107.423 330.138C121.623 315.838 127.223 303.338 127.323 285.038C127.423 275.238 127.523 274.938 131.723 267.338C134.023 263.038 136.923 259.038 138.123 258.438C144.023 255.238 177.723 260.038 202.623 267.638C211.523 270.338 221.623 273.238 225.123 274.038C237.823 277.038 262.723 275.138 280.223 269.938C289.723 267.138 291.123 267.038 302.823 269.038C308.323 270.038 316.623 270.538 324.523 270.438C331.623 270.338 339.923 270.538 343.023 270.938C348.123 271.738 349.623 271.338 361.423 267.138C382.123 259.638 391.723 259.438 414.723 266.438C422.023 268.738 432.123 271.038 437.223 271.638C454.223 273.638 460.223 275.838 476.923 286.338C486.023 292.038 506.723 300.138 517.423 302.138C524.023 303.338 529.723 303.638 538.923 303.238C549.323 302.838 552.523 303.138 557.923 304.738C566.923 307.338 571.923 310.338 575.223 315.338C576.923 317.938 579.023 319.738 580.723 320.138C587.823 321.738 590.723 323.238 596.423 328.538C601.623 333.438 603.923 334.638 611.823 337.338C617.523 339.238 622.723 341.738 625.323 343.838C634.623 351.338 652.223 362.538 655.823 363.038C659.323 363.538 662.523 365.138 691.723 380.138C700.023 384.438 710.423 388.838 716.223 390.638C721.823 392.338 732.623 396.138 740.123 399.138C755.623 405.338 757.723 405.438 765.723 399.538C769.923 396.538 769.923 396.538 783.823 396.538C793.823 396.538 800.723 395.938 808.423 394.438L819.123 392.338L827.423 394.938C837.223 398.038 842.923 398.138 848.523 395.638C851.423 394.338 853.123 394.038 854.323 394.738C857.523 396.538 867.323 397.338 874.923 396.338C882.423 395.438 893.023 392.138 904.323 387.038C915.423 382.138 937.123 379.038 941.523 381.738C942.723 382.438 948.423 385.938 954.223 389.338C962.623 394.438 966.923 398.038 975.923 407.138C987.923 419.438 992.923 422.538 1008.92 427.938C1024.02 433.138 1031.42 432.438 1037.32 425.538C1039.52 422.838 1039.92 421.438 1039.92 416.238C1039.92 409.138 1037.22 399.438 1033.62 393.238C1030.42 387.838 1022.92 380.738 1016.42 377.038C987.523 360.538 987.323 360.438 969.623 341.938C957.523 329.238 951.623 328.538 941.123 338.838C931.923 347.938 931.123 348.538 928.923 348.538C927.823 348.538 921.923 346.938 915.823 344.938C907.723 342.338 902.723 339.938 896.823 336.038C892.523 333.038 886.323 329.838 883.223 328.938C877.823 327.338 876.823 327.338 869.523 328.838C864.623 329.838 858.023 332.238 852.323 335.138L843.223 339.738L832.323 337.538C821.323 335.338 813.423 332.738 809.023 329.838C806.723 328.338 807.223 328.138 821.823 324.538C830.123 322.438 838.823 319.838 841.223 318.738C843.523 317.638 848.123 316.138 851.423 315.538C862.123 313.438 870.823 310.538 881.123 305.438C886.723 302.738 892.223 300.538 893.323 300.538C897.023 300.538 905.623 295.838 908.223 292.438C911.923 287.538 912.523 285.438 914.923 269.138C917.323 252.338 918.523 249.038 923.923 243.138C926.123 240.738 929.523 235.438 931.423 231.238C933.323 227.038 935.423 223.338 936.023 222.938C936.623 222.638 936.823 220.938 936.523 219.138C935.523 213.238 937.523 185.338 939.323 180.938L941.023 176.738L949.723 177.238C957.723 177.638 959.323 178.138 969.723 183.138C988.123 192.038 993.623 193.638 1005.92 193.838C1015.52 194.038 1017.82 193.138 1022.52 187.038C1026.12 182.338 1026.72 176.338 1024.22 169.438C1021.72 162.438 1014.62 150.338 1010.12 145.338C1005.82 140.538 995.723 135.738 982.423 132.038C976.623 130.538 968.823 127.438 963.923 124.738C947.323 115.738 942.323 113.638 935.223 112.338C925.623 110.738 918.823 112.738 913.523 118.538C909.123 123.438 908.423 126.038 909.423 133.838C909.823 137.238 910.223 142.238 910.423 145.038C910.523 147.738 911.023 151.738 911.423 153.738C912.223 157.538 912.123 157.638 902.823 166.438C894.823 174.138 893.223 175.238 891.623 174.338C890.523 173.838 882.223 172.738 873.023 171.938C863.923 171.138 854.423 169.838 851.923 169.038C845.723 166.938 839.523 162.038 815.523 140.538C804.123 130.338 791.323 119.538 787.023 116.538C782.623 113.538 775.123 108.038 770.323 104.238C755.923 93.3383 742.223 87.1384 726.623 84.5384C717.423 83.0384 703.823 78.0384 699.323 74.5384C695.323 71.3383 696.023 71.5384 682.923 68.0384C677.723 66.6384 671.523 65.5384 669.223 65.5384C666.923 65.5384 662.623 64.4384 659.723 63.2384C645.323 56.8383 629.123 53.5384 612.323 53.5384C593.623 53.5384 580.623 58.6384 564.423 72.1384C556.023 79.1384 544.823 87.5384 533.523 95.2384C527.623 99.3383 523.723 99.5384 522.123 96.0384C520.523 92.5384 520.623 89.6384 522.523 84.4384C523.723 80.8383 523.923 77.5384 523.423 67.0384C522.723 52.6384 521.923 48.4384 518.323 40.8383C517.023 38.0384 515.923 35.2384 515.923 34.7384C515.923 34.2384 515.223 33.2384 514.323 32.4384C511.823 30.3383 508.723 23.7384 510.123 23.3383C511.023 23.0384 511.023 22.1383 510.023 19.9383C509.423 18.2383 508.623 15.4383 508.423 13.7383C507.423 5.83835 498.223 1.93832 478.723 1.33835C471.723 1.03833 465.423 1.23834 464.723 1.63834C464.023 2.03833 463.223 2.03833 462.923 1.53833C462.023 0.0383301 454.623 -0.561676 452.523 0.638336ZM372.723 84.7384C373.923 86.8383 374.423 88.5384 374.023 88.5384C373.223 88.5384 369.923 82.5384 369.923 80.9384C369.923 80.0384 370.123 80.2384 372.723 84.7384ZM377.423 91.5384C378.223 92.8383 376.923 92.8383 374.923 91.5384C373.623 90.7384 373.623 90.5384 375.123 90.5384C376.023 90.5384 377.123 90.9384 377.423 91.5384ZM396.523 95.9384C396.423 97.7384 396.123 98.1384 395.223 97.3383C393.723 96.1384 393.523 94.1384 394.923 95.0384C395.523 95.3383 395.923 95.1384 395.923 94.6384C395.923 94.0384 396.123 93.5384 396.323 93.5384C396.523 93.5384 396.623 94.6384 396.523 95.9384ZM380.423 95.5384C380.723 96.0384 380.623 96.5384 380.023 96.5384C379.523 96.5384 378.723 96.0384 378.423 95.5384C378.123 94.9384 378.223 94.5384 378.823 94.5384C379.323 94.5384 380.123 94.9384 380.423 95.5384ZM409.923 100.538C409.923 101.038 409.423 101.538 408.823 101.538C408.323 101.538 408.123 101.038 408.423 100.538C408.723 99.9384 409.223 99.5384 409.523 99.5384C409.723 99.5384 409.923 99.9384 409.923 100.538ZM705.523 145.038C714.523 145.038 714.623 145.038 718.523 148.538C724.423 153.938 734.723 160.938 741.723 164.438C749.523 168.338 755.723 169.938 773.023 172.438C788.823 174.738 796.223 177.038 815.123 185.538C830.223 192.338 834.423 195.438 841.323 204.838C846.023 211.338 859.323 223.838 863.423 225.738C865.823 226.838 867.823 232.838 867.223 237.238L866.723 240.138L859.223 238.838C852.523 237.538 851.423 236.938 848.123 233.338C841.623 226.138 838.423 225.338 814.823 224.738C795.823 224.338 793.223 224.438 784.323 226.538C775.823 228.438 772.623 228.738 760.923 228.238C745.623 227.638 735.923 225.038 726.723 218.938C719.023 213.938 715.723 213.838 698.723 217.638C693.623 218.738 692.523 218.738 689.423 217.238C687.323 216.238 685.923 214.838 685.923 213.738C685.923 211.638 682.223 207.938 679.623 207.338C677.823 207.038 675.623 201.438 666.223 173.038C663.023 163.638 661.423 156.838 661.123 152.238L660.723 145.538L669.123 145.438C673.723 145.438 679.423 145.038 681.923 144.538C684.423 144.038 688.723 143.938 691.423 144.338C694.223 144.738 700.523 145.038 705.523 145.038Z"
          fill="white"
        />
      </svg>
    </section>
  );
};

export default Player;
