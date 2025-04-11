import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

import { getRatioClass } from "./lib/utils";

const MainContent = ({ options, updateOption }) => {
  return (
    <main
      className={cn(
        "absolute top-1/2 left-0 z-10",
        "h-auto w-full",
        "-translate-y-1/2 transform",
        "aspect-9/16",
        getRatioClass(options.cardRatio)
      )}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-pink-500 to-rose-500">
        <div
          className="flex h-full w-full flex-col items-start justify-center gap-3 overflow-hidden p-10"
          style={{
            fontSize: `${options.textSize}rem`,
            lineHeight: `${options.textLineHeight}`,
            color: options.textColor,
            gap: `calc(var(--spacing) * ${options.textLineHeight * 3.5})`,
          }}
        >
          <p>
            यह कहानी उन लोगों के लिए है जो कहते हैं कि &quot;अगर करुणा चाहिए तो
            सब कुछ छोड़ दो, खाना-पीना बंद करो, साँस लेना बंद करो, मर जाओ।&quot;
          </p>

          <p>कहानी – नमक का स्वाद</p>

          <p>
            एक गाँव में एक व्यक्ति को &quot;ईमानदारी से परीक्षण&quot; करने का
            ज़िम्मा सौंपा गया। उसे कहा गया कि एक दाल बन रही है, और उसका काम है
            यह देखना कि उसमें नमक ठीक है या नहीं।
          </p>
          <p>
            वह व्यक्ति दाल चखता है और कहता है, &quot;नमक थोड़ा कम है।&quot;
            रसोइया थोड़ा नमक डालता है। फिर से कहता है – &quot;अब भी थोड़ा कम
            है।&quot; ऐसे करते-करते वह बार-बार नमक डलवाता गया। अंत में झुँझलाकर
            रसोइये ने पूरा नमक का डिब्बा ही दाल में डाल दिया।
          </p>
          <p>
            अब जब वही व्यक्ति दाल चखता है तो मुँह बिगाड़कर बोलता है – &quot;अब
            तो बहुत ज़्यादा हो गया!&quot; रसोइया मुस्कुराता है और कहता है –
            &quot;भाई, मैं तो तुझे शुरुआत से सुन रहा था, तू ही बार-बार &#39;कम
            है&#39; बोलता रहा। अब तू कह रहा है कि मैं ज़्यादा कर रहा हूँ?&quot;
          </p>
          <p>
            यहीं से सीख मिलती है — जब तर्क या परीक्षण ईमानदारी से न किया जाए, तो
            नतीजा भी बेईमानी और अतिशयोक्ति में डूब जाता है।
          </p>
          <p>
            Veganism कोई अतिशयोक्ति नहीं है, बल्कि एक संतुलित, करुणामय और
            विवेकपूर्ण जीवन जीने की कोशिश है। अगर कोई कहे कि &quot;तब तो जीना ही
            छोड़ दो&quot;, तो यह उसी तरह का अतार्किक निष्कर्ष है जैसे &quot;दाल
            में नमक कम है&quot; से सीधा &quot;पूरा डिब्बा डाल दो&quot; कह देना।
          </p>
          <p>
            करुणा कोई मज़ाक नहीं, जीवन जीने का सबसे सच्चा तरीका है – बस ईमानदारी
            से इसे समझना और परखना ज़रूरी है।
          </p>
        </div>
      </div>
    </main>
  );
};

MainContent.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default MainContent;
