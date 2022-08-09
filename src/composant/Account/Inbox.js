function Inbox() {
  return (
    <div>
      <div
        tabindex="-1"
        role="dialog"
        style={{
          height: "auto",
          width: "1280px",
          top: "283.5px",
          left: "0px",
          display: "block",
          zIndex: "101",
          maxWidth: "1280px",
        }}
        class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front tl_popup_dialog"
        aria-describedby="inboxContent"
        aria-labelledby="ui-id-1"
      >
        <div
          class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix"
          style={{
            height: "0px",
            padding: "0px",
            background: "none",
            border: "0px",
          }}
        >
          <span
            id="ui-id-1"
            class="ui-dialog-title"
            style={{ display: "none" }}
          >
            &nbsp;
          </span>
          <button
            type="button"
            class="ui-dialog-titlebar-close"
            style={{ display: "none" }}
          ></button>
        </div>
        <div
          id="inboxContent"
          class="dialog ui-dialog-content ui-widget-content resizedW"
          style={{
            width: "auto",
            minHeight: "0px",
            maxHeight: "none",
            height: "678px",
            overflow: "auto",
          }}
        >
          <div class="popup_flex_box are_you_sure" style={{ display: "none" }}>
            <div class="are_you_sure__popup">
              <div class="tl_popup_content">
                <div class="px-2 pb-2 text-center are_you_sure__content"></div>
                <div class="are_you_sure__buttons d-flex align-items-center justify-content-center">
                  <div class="h-bg-primary read_messages">Yes</div>
                  <div class="h-bg-primary delete_messages">Yes</div>
                  <div class="h-bg-secondary are_you_sure__no">No</div>
                </div>
              </div>
            </div>
          </div>

          <div class="tl_my_inbox_container tl_popup_clr">
            <form action="/Account/Inbox" id="inboxForm" method="post">
              <input
                data-val="true"
                data-val-number="The field Page must be a number."
                data-val-required="The Page field is required."
                id="pageNumber"
                name="Page"
                type="hidden"
                value="0"
              />
            </form>{" "}
            <div class="tl_popup_header flex alCen">
              <div
                style={{ width: "calc((100%) - 20px)" }}
                class="tl_head_text tl_msg_head"
              >
                Bienvenue sur votre messagerie
              </div>
              <div class="tl_head_close dont-shrink"></div>
              <input type="hidden" id="isLogged" value="4651973" />
            </div>
            <div class="tl_my_inbox_cont flex spcbtw">
              <div class="tl_my_inbox_mails_cont">
                <div class="flex inbox_tool_items">
                  <div class="readAll_icon" style={{ display: "none" }}></div>
                  <div class="deleteAll_icon" style={{ display: "none" }}></div>
                </div>

                <div
                  class="tl_my_inbox_mail_box opened scrolled__content"
                  id="js_msgs_cont"
                >
                  <div id="js_msgs_cont-inner"></div>
                </div>
                <div class="tl_msg_button_cont">
                  <div
                    id="newmessage_btn"
                    onclick="NewMessageBtnClick()"
                    class="tl_msg_button h-bg-primary text-center"
                  >
                    Nouveau Message
                  </div>
                </div>
              </div>

              <div class="tl_my_inbox_msg_box ">
                <div class="tl_msg_cont scrolled__content" id="msg_cont"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ui-widget-overlay ui-front" style={{ zIndex: "100" }}></div>
    </div>
  );
}
export default Inbox;
