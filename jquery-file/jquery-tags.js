/*
 jQuery Tags Input Plugin 1.3.3
 Copyright (c) 2011 XOXCO, Inc

 Documentation for this plugin lives here:
 http://xoxco.com/clickable/jquery-tags-input

 Licensed under the MIT license.
 See license text here: http://www.opensource.org/licenses/mit-license.php

 ben@xoxco.com
 */
(function($) {

    var delimiter = new Array();
    var tags_callbacks = new Array();
    var isDisabled = false;
    $.fn.doAutosize = function(o){
        var minWidth = $(this).data('minwidth'),
            maxWidth = $(this).data('maxwidth'),
            val = '',
            input = $(this),
            testSubject = $('#'+$(this).data('tester_id'));

        if (val === (val = input.val())) {return;}

        // Enter new content into testSubject
        var escaped = val.replace(/&/g, '&amp;').replace(/\s/g,' ').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        testSubject.html(escaped);
        // Calculate new width + whether to change
        var testerWidth = testSubject.width(),
            newWidth = (testerWidth + o.comfortZone) >= minWidth ? testerWidth + o.comfortZone : minWidth,
            currentWidth = input.width(),
            isValidWidthChange = (newWidth < currentWidth && newWidth >= minWidth)
                || (newWidth > minWidth && newWidth < maxWidth);

        // Animate width
        if (isValidWidthChange) {
            input.width(newWidth);
        }
    };
    $.fn.resetAutosize = function(options){
        // alert(JSON.stringify(options));
        var minWidth =  $(this).data('minwidth') || options.minInputWidth || $(this).width(),
            maxWidth = $(this).data('maxwidth') || options.maxInputWidth || ($(this).closest('.tagsinput').width() - options.inputPadding),
            val = '',
            input = $(this),
            testSubject = $('<tester/>').css({
                position: 'absolute',
                top: -9999,
                left: -9999,
                width: 'auto',
                fontSize: input.css('fontSize'),
                fontFamily: input.css('fontFamily'),
                fontWeight: input.css('fontWeight'),
                letterSpacing: input.css('letterSpacing'),
                whiteSpace: 'nowrap'
            }),
            testerId = $(this).attr('id')+'_autosize_tester';
        if(! $('#'+testerId).length > 0){
            testSubject.attr('id', testerId);
            testSubject.appendTo('body');
        }

        input.data('minwidth', minWidth);
        input.data('maxwidth', maxWidth);
        input.data('tester_id', testerId);
        input.css('width', minWidth);
    };

    $.fn.addTag = function(value,options) {
        options = jQuery.extend({focus:false,callback:true,importing:false},options);

        if (isDisabled && !options.importing) {
            return false;
        }

        this.each(function() {
            var id = $(this).attr('id');

            var tagslist = $(this).val().split(delimiter[id]);
            if (tagslist[0] == '') {
                tagslist = new Array();
            }

            value = jQuery.trim(value);

            if (options.unique) {
                var skipTag = $(this).tagExist(value);
                if(skipTag == true) {
                    //Marks fake input as not_valid to let styling it
                    $('#'+id+'_tag').addClass('not_valid');
                }
            } else {
                var skipTag = false;
            }

            if (value !='' && skipTag != true) {
                $('<span>').addClass('tag').append(
                    $('<span>').text(value),
                    !isDisabled ? $('<a>', {
                        href: '#',
                        'aria-label': 'Remove tag',
                        class: 'pf-link-none',
                        html: $('<i class="pf-i pf-i-close pf-text-gray-700"/>')
                    }).click(function () {
                        return $('#' + id).removeTag(escape(value));
                    }) : ''
                ).insertBefore('#' + id + '_addTag');

                tagslist.push(value);

                $('#'+id+'_tag').val('');
                if (options.focus) {
                    $('#'+id+'_tag').focus();
                } else {
                    $('#'+id+'_tag').blur();
                }

                $.fn.tagsInput.updateTagsField(this,tagslist);

                if (options.callback && tags_callbacks[id] && tags_callbacks[id]['onAddTag']) {
                    var f = tags_callbacks[id]['onAddTag'];
                    f.call(this, value);
                }
                if(tags_callbacks[id] && tags_callbacks[id]['onChange'])
                {
                    var i = tagslist.length;
                    var f = tags_callbacks[id]['onChange'];
                    f.call(this, $(this), tagslist[i-1]);
                }
            }

        });

        return false;
    };

    $.fn.removeTag = function(value) {
        if (isDisabled) {
            return false;
        }

        value = unescape(value);
        this.each(function() {
            var id = $(this).attr('id');

            var old = $(this).val().split(delimiter[id]);

            $('#'+id+'_tagsinput .tag').remove();
            str = '';
            for (i=0; i< old.length; i++) {
                if (old[i]!=value) {
                    str = str + delimiter[id] +old[i];
                }
            }

            $.fn.tagsInput.importTags(this,str);

            if (tags_callbacks[id] && tags_callbacks[id]['onRemoveTag']) {
                var f = tags_callbacks[id]['onRemoveTag'];
                f.call(this, value);
            }
        });

        return false;
    };

    $.fn.tagExist = function(val) {
        var id = $(this).attr('id');
        var tagslist = $(this).val().split(delimiter[id]);
        return (jQuery.inArray(val, tagslist) >= 0); //true when tag exists, false when not
    };

    // clear all existing tags and import new ones from a string
    $.fn.importTags = function(str) {
        id = $(this).attr('id');
        $('#'+id+'_tagsinput .tag').remove();
        $.fn.tagsInput.importTags(this,str);
    }

    $.fn.tagsInput = function(options) {
        var settings = jQuery.extend({
            interactive:true,
            defaultText:'add a tag',
            minChars:0,
            width:'300px',
            height:'100px',
            autocomplete: {selectFirst: false },
            'hide':true,
            'delimiter':',',
            'unique':true,
            removeWithBackspace:true,
            placeholderColor:'#666666',
            placeholderFont:'helvetica',
            autosize: true,
            comfortZone: 20,
            inputPadding: 6*2,
            disabled: false,
            inputValidation: null
        },options);

        isDisabled = options.disabled || false;

        this.each(function() {
            if (settings.hide) {
                $(this).hide();
            }
            var id = $(this).attr('id');
            if (!id || delimiter[$(this).attr('id')]) {
                id = $(this).attr('id', 'tags' + new Date().getTime()).attr('id');
            }

            var data = jQuery.extend({
                pid:id,
                real_input: '#'+id,
                holder: '#'+id+'_tagsinput',
                input_wrapper: '#'+id+'_addTag',
                fake_input: '#'+id+'_tag'
            },settings);

            delimiter[id] = data.delimiter;

            if (settings.onAddTag || settings.onRemoveTag || settings.onChange) {
                tags_callbacks[id] = new Array();
                tags_callbacks[id]['onAddTag'] = settings.onAddTag;
                tags_callbacks[id]['onRemoveTag'] = settings.onRemoveTag;
                tags_callbacks[id]['onChange'] = settings.onChange;
            }

            var markup = '<div id="'+id+'_tagsinput" class="tagsinput pf-rounded"><div id="'+id+'_addTag">';

            if (settings.interactive) {
                markup = markup + '<input id="'+id+'_tag" value="" data-default="'+settings.defaultText+'" '+(isDisabled ? 'disabled="disabled"' : '')+' />';
            }

            markup = markup + '</div><div class="tags_clear"></div></div>';

            $(markup).insertAfter(this);

            $(data.holder).css('width',settings.width);
            $(data.holder).css('min-height',settings.height);
            $(data.holder).css('height','100%');

            if ($(data.real_input).val()!='') {
                $.fn.tagsInput.importTags($(data.real_input),$(data.real_input).val());
            }
            if (settings.interactive) {
                $(data.fake_input).val($(data.fake_input).attr('data-default'));
                $(data.fake_input).css({'color':settings.placeholderColor, 'font-family': settings.placeholderFont});
                $(data.fake_input).resetAutosize(settings);

                $(data.holder).bind('click',data,function(event) {
                    $(event.data.fake_input).focus();
                });

                $(data.fake_input).bind('focus',data,function(event) {
                    if ($(event.data.fake_input).val()==$(event.data.fake_input).attr('data-default')) {
                        $(event.data.fake_input).val('');
                    }
                    $(event.data.fake_input).css('color','#000000');
                });

                var isValidTagName = function (event) {
                    return !isTagTooShort(event) && isSetMaxCharsAndNotTooLong(event) && isAllAllowedCharacters(event);
                };

                var isAllAllowedCharacters = function (event) {
                    return !$(event.data.fake_input).val().match(event.data.inputValidation);
                };

                var isSetMaxCharsAndNotTooLong = function (event) {
                    return !event.data.maxChars || !isTagTooLong(event);
                };

                var isTagTooLong = function (event) {
                    return !(event.data.maxChars >= $(event.data.fake_input).val().length);
                };

                var isTagTooShort = function (event) {
                    return !(event.data.minChars <= $(event.data.fake_input).val().length);
                };

                var isValidTagCount = function (event) {
                    if (!event.data.maxTags) {
                        return true;
                    }
                    var tagList = $(data.real_input).val().split(delimiter[id]);

                    return tagList.length < event.data.maxTags;
                };

                if (settings.autocomplete_source !== undefined) {
                    autocomplete_options = {source: settings.autocomplete_source};
                    for (attrname in settings.autocomplete) {
                        autocomplete_options[attrname] = settings.autocomplete[attrname];
                    }

                    if (jQuery.ui.autocomplete !== undefined) {
                        $(data.fake_input).autocomplete(autocomplete_options).focus(function(){
                            if ($(this).val().length == 0) {
                                $(this).autocomplete("search", "");
                            }
                        });
                        $(data.fake_input).bind('autocompleteselect',data,function(event,ui) {
                            $(event.data.real_input).addTag(ui.item.value,{focus:true,unique:(settings.unique)});
                            return false;
                        });
                    }

                } else {
                    // if a user tabs out of the field, create a new tag
                    // this is only available if autocomplete is not used.
                    $(data.fake_input).bind('blur',data,function(event) {
                        var d = $(this).attr('data-default');
                        if ($(event.data.fake_input).val()!='' && $(event.data.fake_input).val()!=d) {
                            if (isValidTagName(event) && isValidTagCount(event)) {
                                $(event.data.real_input).addTag($(event.data.fake_input).val(),{focus:true,unique:(settings.unique)});
                            }
                        } else {
                            $(event.data.fake_input).val($(event.data.fake_input).attr('data-default'));
                            $(event.data.fake_input).css({'color':settings.placeholderColor, 'font-family': settings.placeholderFont});
                        }
                        return false;
                    });

                }

                var handleInput = function(event) {
                    event.preventDefault();
                    if (isValidTagName(event) && isValidTagCount(event)) {
                        $(event.data.real_input).addTag($(event.data.fake_input).val(),{focus:true,unique:(settings.unique)});
                    }
                    $(event.data.fake_input).resetAutosize(settings);
                    return false;
                };

                // if user types a comma, create a new tag (This is a bugfix for android)
                $(data.fake_input).bind('textInput',data,function(event) {
                    if (event.originalEvent.data.charCodeAt(0) == event.data.delimiter.charCodeAt(0)) {
                        handleInput(event);
                    } else if (event.data.autosize) {
                        $(event.data.fake_input).doAutosize(settings);
                    }
                });

                // if user types a comma, create a new tag
                $(data.fake_input).bind('keypress',data,function(event) {
                    if (event.which==event.data.delimiter.charCodeAt(0) || event.which==13 ) {
                        handleInput(event);
                    } else if (event.data.autosize) {
                        $(event.data.fake_input).doAutosize(settings);
                    }
                });

                //Delete last tag on backspace
                data.removeWithBackspace && $(data.fake_input).bind('keydown',function(event)
                {
                    if (event.key === 'Backspace' && $(this).val() === '')
                    {
                        event.preventDefault();
                        var last_tag = $(this).closest('.tagsinput').find('.tag:last').find($('span')).text();
                        var id = $(this).attr('id').replace(/_tag$/, '');
                        $('#' + id).removeTag(escape(last_tag));
                        $(this).trigger('focus');
                    }
                });
                $(data.fake_input).blur();

                //Removes the not_valid class when user changes the value of the fake input
                if(data.unique) {
                    $(data.fake_input).keydown(function(event){
                        if(event.keyCode == 8 || String.fromCharCode(event.which).match(/\w+|[???????????????????????????????????????????????????,/]+/)) {
                            $(this).removeClass('not_valid');
                        }
                    });
                }

                //Show not valid when user exceeds the maxChar
                if (data.maxChars) {
                    $(data.fake_input).bind('keyup', data, function (event) {
                        if ((event.data.maxChars && (event.data.maxChars < $(event.data.fake_input).val().length))) {
                            $(this).addClass('max_chars_exceeded');
                        }
                        else {
                            $(this).removeClass('max_chars_exceeded');
                        }
                    });
                }

                // Show not valid if user used wrong characters
                if (data.inputValidation) {
                    $(data.fake_input).bind('keyup', data, function (event) {
                        if (!isAllAllowedCharacters(event)) {
                            $(this).addClass('wrong_chars');
                        }
                        else {
                            $(this).removeClass('wrong_chars');
                        }
                    });
                }

            } // if settings.interactive
        });

        return this;
    };

    $.fn.tagsInput.updateTagsField = function(obj,tagslist) {
        var id = $(obj).attr('id');
        $(obj).val(tagslist.join(delimiter[id]));
    };

    $.fn.tagsInput.importTags = function(obj,val) {
        $(obj).val('');
        var id = $(obj).attr('id');
        var tags = val.split(delimiter[id]);
        for (i=0; i<tags.length; i++) {
            $(obj).addTag(tags[i],{focus:false,callback:false,importing:true});
        }
        if(tags_callbacks[id] && tags_callbacks[id]['onChange'])
        {
            var f = tags_callbacks[id]['onChange'];
            f.call(obj, obj, tags[i]);
        }
    };

})(jQuery);