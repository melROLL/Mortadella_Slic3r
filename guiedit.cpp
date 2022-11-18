static wxMenu* generate_other_menu()
{
    wxMenu* otherMenu = new wxMenu();
    append_menu_item(otherMenu, wxID_ANY, wxString::Format(_L(" Releases")), wxString::Format(_L("Open the %s releases page in your browser"), SLIC3R_APP_NAME),
        [](wxCommandEvent&) { wxGetApp().open_browser_with_warning_dialog(SLIC3R_DOWNLOAD, nullptr, false); });
    append_menu_item(otherMenu, wxID_ANY, wxString::Format(_L("%s wiki"), SLIC3R_APP_NAME), wxString::Format(_L("Open the %s wiki in your browser"), SLIC3R_APP_NAME),
        [](wxCommandEvent&) { wxGetApp().open_browser_with_warning_dialog("http://github.com/" SLIC3R_GITHUB "/wiki"); });
    append_menu_item(otherMenu, wxID_ANY, wxString::Format(_L("%s website"), SLIC3R_APP_NAME), _L("Open the Slic3r website in your browser"),
        [](wxCommandEvent&) { wxGetApp().open_browser_with_warning_dialog("http://slic3r.org"); });

    if (wxGetApp().is_editor())
        append_menu_item(otherMenu, wxID_ANY, wxString::Format(_L("&About %s"), SLIC3R_APP_NAME), _L("Show about dialog"),
            [](wxCommandEvent&) { Slic3r::GUI::about(); });
    else
        append_menu_item(otherMenu, wxID_ANY, wxString::Format(_L("&About %s"), GCODEVIEWER_APP_NAME), _L("Show about dialog"),
            [](wxCommandEvent&) { Slic3r::GUI::about(); });
    append_menu_item(otherMenu, wxID_ANY, _L("Show Tip of the Day"), _L("Opens Tip of the day notification in bottom right corner or shows another tip if already opened."),
        [](wxCommandEvent&) { wxGetApp().plater()->get_notification_manager()->push_hint_notification(false); });
    helpMenu->AppendSeparator();
    append_menu_item(otherMenu, wxID_ANY, _L("Keyboard Shortcuts") + sep + "&?", _L("Show the list of the keyboard shortcuts"),
        [](wxCommandEvent&) { wxGetApp().keyboard_shortcuts(); });
#if ENABLE_THUMBNAIL_GENERATOR_DEBUG
    otherMenu->AppendSeparator();
    append_menu_item(otherMenu, wxID_ANY, "DEBUG gcode thumbnails", "DEBUG ONLY - read the selected gcode file and generates png for the contained thumbnails",
        [](wxCommandEvent&) { wxGetApp().gcode_thumbnails_debug(); });
#endif // ENABLE_THUMBNAIL_GENERATOR_DEBUG

    return otherMenu;
}